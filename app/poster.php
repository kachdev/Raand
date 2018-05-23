<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class poster extends Model
{
    protected $fillable = [
        'firstname',
        'lastname',
        'username',
        'phoneno',
        'location',
        'departure_date',
        'arrival_date',
        'departure_time',
        'arrival_time'
    ];

    public $timestamps=false;
}
