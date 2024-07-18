<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Battery extends Model
{
    use HasFactory;
    
    protected $table = 'batteries';

    protected $fillable = [
        'brand',
        'model',
        'description',
        'capacity',
        'voltage',
        'type',
        'size',
        'weight',
        'price',
        'stock',
        'image',
    ];

}
