function DragNDrop(call){
    var dragSrcEl = '';
    function handleDragStart(e) {
        this.style.opacity = "0.4";
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = "move";
    }

    function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = "move";
        return false;
    }

    function handleDragEnter(e) {
        this.classList.add("over");
    }

    function handleDragLeave(e) {
        this.classList.remove("over");
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }

        if (dragSrcEl != this) {
            this.replaceWith(this, dragSrcEl);
        }
        return false;
    }

    function handleDragEnd(e) {
    this.style.opacity = "1";
    items.forEach(function(item) {
        item.classList.remove("over");
        if(typeof call === 'function') call();
    });
    }
    let items = document.querySelectorAll(".drag-drop-container .drag-drop");
        items.forEach(function(item) {
        item.addEventListener("dragstart", handleDragStart, false);
        item.addEventListener("dragenter", handleDragEnter, false);
        item.addEventListener("dragover", handleDragOver, false);
        item.addEventListener("dragleave", handleDragLeave, false);
        item.addEventListener("drop", handleDrop, false);
        item.addEventListener("dragend", handleDragEnd, false);
    });
}
DragNDrop();