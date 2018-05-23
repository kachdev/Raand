<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\receiver;
use Log;

class receiverController extends Controller
{
    public function index(){
        $receivers = receiver::all();
        return Response()->json($receivers);
    }

    public function store(Request $request){
        $receivers = receiver::create($request->all());   
        return Response()->json($receivers);
    }
}
