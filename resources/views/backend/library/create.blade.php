@extends('layouts.default')

@section('content')

    <div class="content-header">
        <div class="content-header-left">
            <div class="breadcrumb">
                <a class="page" href="media.php" data-i18n="media.title"></a>
                <a class="page current" href="media-add-new.php" data-i18n="media.new"></a>
            </div>
        </div>
    </div>

    <div class="content-main add-media">
        <div class="row">
            <div class="col col-left">
                <label for="upload-media" class="drag_and_drop_box">
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                    <span><span data-i18n="file.drop">Drop your files here.</span> <br> <span data-i18n="or"></span> <span data-i18n="file.browse"></span></span>
                    <input type="file" id="upload-media" multiple onchange="uploadMediaFiles(this)" accept="image/*" />
                </label>
            </div>
            <div class="col col-right">
                <div class="upload-status">
                    <ul id="file-list"></ul>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
        const axiosInstances = [];
        const fileUploaded =[];
        var i=0;
        function uploadMediaFiles(input) {
            const fileList = input.files;
            const fileUploadUrl = "{{ url('/upload') }}";
            const progressBarContainer = $('#file-list');

            // progressBarContainer.html('');

            Array.from(fileList).forEach((file, index) => {
                i++;
                const listItem = $('<li></li>');
                const fileTypeIcon = $('<span class="file-type"></span>');
                fileTypeIcon.append('<i class="fa-solid fa-file-' + getFileExtensionIcon(file.type) + '"></i>');

                const fileActionContainer = $('<div class="file-info-action-progress"></div>');

                const fileAction = $('<div class="file-info-action"></div>');
                fileAction.append('<div class="file-info"><span class="file-name">' + file.name + '</span><span class="file-size">' + (file.size / (1024 * 1024)).toFixed(2) + ' MB</span></div>');

                const deleteButton = $('<span class="file-action delete file-' + i + '" data-i="' + i + '"><i class="fa-regular"></i></span>');
                deleteButton.click(function() {
                    cancelFileUpload(i);
                });

                fileAction.append(deleteButton);
                fileActionContainer.append(fileAction);

                const fileProgressContainer = $('<div class="file-progress"></div>');
                const progressBar = $('<progress id="file-' + i + '" value="0" max="100"></progress>');
                fileProgressContainer.append(progressBar);

                fileActionContainer.append(fileProgressContainer);
                listItem.append(fileTypeIcon);
                listItem.append(fileActionContainer);
                progressBarContainer.append(listItem);

                // Start the file upload
                uploadFile(file, i, fileUploadUrl);
            });
        }

        function getFileExtensionIcon(fileType) {
            const fileTypeMap = {
                'image/png': 'png',
                'image/jpeg': 'jpg',
                'application/pdf': 'pdf',
            };

            return fileTypeMap[fileType] || 'file';
        }

        function uploadFile(file, i, url) {
            const formData = new FormData();
            formData.append('files[]', file);

            const cancelTokenSource = axios.CancelToken.source();
            axiosInstances[i] = { i: i, cancelTokenSource: cancelTokenSource };

            axios.post(url, formData, {
                onUploadProgress: function (progressEvent) {
                    // console.log('hi'+progressEvent.lengthComputable);
                    if (progressEvent) {
                        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        updateProgressBar(i, percentCompleted);
                    }
                },
                cancelToken: cancelTokenSource.token // Provide the cancel token
            })
            .then(function(response) {
                console.log(response.data);
            })
            .catch(function(error) {
                console.error('Error uploading file ' + i + ': ', error);
            });
        }

        function updateProgressBar(i, percent) {
            if (percent === 100) {
                fileUploaded[i] = true;
                $('.file-' + i).html('<p style="color: #00f908;">File uploaded</p>');          
              }
            $('#file-' + i).val(percent);
        }

        function cancelFileUpload(i) {
            if (fileUploaded[i]) {
                return;
            }
            const axiosInstance = axiosInstances.find(instance => instance.i === i);
            if (axiosInstance) {
                axiosInstance.cancelTokenSource.cancel('File upload canceled by user');
                $('.file-' + i).html('File upload canceled');          
            }
        }
    </script>
@endsection
