<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Library;

class MediaController extends Controller
{
    public function upload(Request $request)
    {
        try {
            $files = $request->file('files');

            foreach ($files as $index => $file) {
                if (!isset($file)) {
                    throw new \Exception('File not provided.');
                }
                $file_size= $file->getSize();
                $fileName = time() . '_' . $index . '.' . $file->getClientOriginalExtension();
                $file->move(public_path('uploads'), $fileName);
              
                Library::create([
                    'name' => pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME),
                    'url' => 'uploads/' . $fileName,
                    'file_type' => $file->getClientOriginalExtension(),
                    'file_size' => $file_size,
                    'is_favorite' => 0,
                ]);
            }

        return response()->json(['message' => 'Files uploaded successfully']);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()]);
        }
    }
    public function media(){
        $libraries = Library::all();
        return view('backend.library.index' , compact('libraries'));
    }
}
