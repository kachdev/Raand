<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\poster;
use Log;

class posterController extends Controller
{

    public function index(){
        $posters = Poster::all();
        return Response()->json($posters);
    }

    public function today() {
        
    }

    public function store(Request $request){
        $posters = Poster::create([
            'firstname' => $request->input('firstname'),
            'lastname' => $request->input('lastname'),
            'username' => $request->input('username'),
            'phoneno' => $request->input('phoneno'),
            'location' => $request->input('location'),
            'departure_date' => $request->input('departure_date'),
            'arrival_date' => $request->input('arrival_date'),
            'departure_time' => $request->input('departure_time'),
            'arrival_time' => $request->input('arrival_time'),
        ]);   

        return Response()->json($posters);
    }
}
