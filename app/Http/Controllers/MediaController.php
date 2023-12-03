<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    public function upload(Request $request)
    {
        
        // Schema::create('libraries', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('name');
        //     $table->string('url');
        //     $table->string('fie_type');
        //     $table->string('file_size');
        //     $table->string('is_favorite');
        //     $table->timestamps();
        // });
        try {
            $files = $request->file('files');

            foreach ($files as $index => $file) {
                
                if (!isset($file)) {
                    throw new PostTooLargeException();
                }
                $fileName = time() . '_' . $index . '.' . $file->getClientOriginalExtension();
                $file->move(public_path('uploads'), $fileName);                
            }

            return response()->json(['message' => 'Files uploaded successfully']);
        } catch (PostTooLargeException $exception) {
            // Handle cancellation logic here
            return response()->json(['message' => 'File upload canceled by user']);
        }
    }
}
