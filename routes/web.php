<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RollManagement;
use App\Http\Controllers\FrequentController;
use App\Http\Controllers\MediaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/dashboard', function ()
{return view('dashboard');
})
->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return view('welcome');
    });


    // Route::get('/media', function () {
    //     return view('backend.library.index');
    // });

    Route::get('/media-add-new', function () {
        return view('backend.library.create');
    });

    Route::get('/slider', function () {
        return view('backend.slide.index');
    });
    Route::get('/pages', function () {
        return view('backend.page.index');
    });
    Route::get('/add_page', function () {
        return view('backend.page.create');
    });
    Route::get('/posts', function () {
        return view('backend.post.index');
    });
    Route::get('/add_new_post', function () {
        return view('backend.post.create');
    });
    Route::get('/post_category', function () {
        return view('backend.post.postcategory');
    });
    Route::get('/notices', function () {
        return view('backend.notice.index');
    });
    Route::get('/add_new_notice', function () {
        return view('backend.notice.create');
    });
    Route::get('/events', function () {
        return view('backend.event.index');
    });
    Route::get('/add_new_event', function () {
        return view('backend.event.create');
    });
    Route::get('/user_access', function () {
        return view('backend.userAccess.userAccess');
    });
    Route::get('/members', function () {
        return view('backend.member.index');
    });
    Route::get('/add_new_member', function () {
        return view('backend.member.create');
    });

    Route::get('/committeess', function () {
        return view('backend.committee.index');
    });
    Route::get('/add_new_committee', function () {
        return view('backend.committee.create');
    });

    Route::get('/frequent', [FrequentController::class, 'frequent']);
    Route::post('/frequent', [FrequentController::class, 'frequent_store'])->name('frequent.store');
    Route::get('/Add_role_permission', [RollManagement::class, 'Add_role_permission']);
    Route::post('/frequent-update', [RollManagement::class, 'role_permission_update'])->name('frequent.update');
    Route::get('frequent/delete/{id}', [RollManagement::class, 'delete']);

    Route::get("/media", [MediaController::class, 'media']);





    // Route::get('/frequent', function () {
    //     return view('backend.frequent.frequent');
    // });
    Route::get('/settings', function () {
        return view('backend.settings.settings');
    });


});

require __DIR__.'/auth.php';
