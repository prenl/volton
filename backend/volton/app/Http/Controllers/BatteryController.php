<?php

namespace App\Http\Controllers;

use Illuminate\Http\{
    Request,
};
use App\Models\Battery;
use Illuminate\Support\Facades\Validator;

class BatteryController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/batteries",
     *     summary="Get list of batteries",
     *     tags={"Battery"},
     *     @OA\Parameter(
     *         name="page",
     *         in="query",
     *         description="Page number",
     *         required=false,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Parameter(
     *         name="page_size",
     *         in="query",
     *         description="Number of records per page",
     *         required=false,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Parameter(
     *         name="search",
     *         in="query",
     *         description="Search term",
     *         required=false,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="sort",
     *         in="query",
     *         description="Sort field",
     *         required=false,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="brand",
     *         in="query",
     *         description="Filter by brand",
     *         required=false,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="model",
     *         in="query",
     *         description="Filter by model",
     *         required=false,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="type",
     *         in="query",
     *         description="Filter by type",
     *         required=false,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="size",
     *         in="query",
     *         description="Filter by size",
     *         required=false,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="weight",
     *         in="query",
     *         description="Filter by weight",
     *         required=false,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="capacity",
     *         in="query",
     *         description="Filter by capacity",
     *         required=false,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Parameter(
     *         name="voltage",
     *         in="query",
     *         description="Filter by voltage",
     *         required=false,
     *         @OA\Schema(type="numeric")
     *     ),
     *     @OA\Parameter(
     *         name="price_from",
     *         in="query",
     *         description="Filter by minimum price",
     *         required=false,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Parameter(
     *         name="price_to",
     *         in="query",
     *         description="Filter by maximum price",
     *         required=false,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Parameter(
     *         name="stock",
     *         in="query",
     *         description="Filter by stock availability",
     *         required=false,
     *         @OA\Schema(type="boolean")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Bad request"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Server error"
     *     )
     * )
     */
    public function index(Request $request) {
        $page = $request->get('page', 1);
        $perPage = $request->get('page_size', 10);
        
        $batteries = Battery::query();

        if ($request->has('search')) {
            $search = $request->search;
            $batteries->where('brand', 'like', "%$search%")
                ->orWhere('model', 'like', "%$search%")
                ->orWhere('description', 'like', "%$search%")
                ->orWhere('type', 'like', "%$search%")
                ->orWhere('size', 'like', "%$search%")
                ->orWhere('weight', 'like', "%$search%")
                ->orWhere('capacity', 'like', "%$search%")
                ->orWhere('voltage', 'like', "%$search%");
        }

        if ($request->has('sort')) {
            $sort = $request->sort;
            $batteries->orderBy($sort, 'asc');
        }

        if ($request->has('brand')) {
            $brand = $request->brand;
            $batteries->where('brand', $brand);
        }

        if ($request->has('model')) {
            $model = $request->model;
            $batteries->where('model', $model);
        }

        if ($request->has('type')) {
            $type = $request->type;
            $batteries->where('type', $type);
        }

        if ($request->has('size')) {
            $size = $request->size;
            $batteries->where('size', $size);
        }

        if ($request->has('weight')) {
            $weight = $request->weight;
            $batteries->where('weight', $weight);
        }

        if ($request->has('capacity')) {
            $capacity = $request->capacity;
            $batteries->where('capacity', $capacity);
        }

        if ($request->has('voltage')) {
            $voltage = $request->voltage;
            $batteries->where('voltage', $voltage);
        }

        if ($request->has('price_from')) {
            $priceFrom = $request->price_from;
            $batteries->where('price', '>=', $priceFrom);
        }

        if ($request->has('price_to')) {
            $priceTo = $request->price_to;
            $batteries->where('price', '<=', $priceTo);
        }

        if ($request->has('stock')) {
            if ($request->stock == 1) {
                $batteries->where('stock', true);
            } else {
                $batteries->where('stock', false);
            }
        }

        $total = $batteries->count();
        $batteries = $batteries->skip(($page - 1) * $perPage)->take($perPage)->get();
        $totalPages = ceil($total / $perPage);

        return response()->json(['data' => $batteries, 'records' => $total, 'pages' => $totalPages]);
    }


    /**
     * @OA\Post(
     *     path="/api/batteries",
     *     summary="Store a new battery",
     *     tags={"Battery"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="brand", type="string", example="Duracell"),
     *             @OA\Property(property="model", type="string", example="AA"),
     *             @OA\Property(property="description", type="string", example="High power battery"),
     *             @OA\Property(property="capacity", type="integer", example=2500),
     *             @OA\Property(property="voltage", type="number", format="float", example=1.5),
     *             @OA\Property(property="type", type="string", example="Alkaline"),
     *             @OA\Property(property="size", type="string", example="AA"),
     *             @OA\Property(property="weight", type="string", example="23g"),
     *             @OA\Property(property="price", type="integer", example=100),
     *             @OA\Property(property="stock", type="boolean", example=true),
     *             @OA\Property(property="image", type="string", format="binary")
     *         )
     *     ),
     *     @OA\Response(response=201, description="Battery created"),
     *     @OA\Response(response=400, description="Invalid input")
     * )
     */
    public function store(Request $request) {
        $body = $request->all();
        $validator = Validator::make($body, [
            'brand' => 'required|string',
            'model' => 'required|string',
            'description' => 'required|string',
            'capacity' => 'required|integer',
            'voltage' => 'required|numeric',
            'type' => 'nullable|string',
            'size' => 'nullable|string',
            'weight' => 'nullable|string',
            'price' => 'required|integer',
            'stock' => 'required|boolean',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $battery = Battery::create([
            'brand' => $request->brand,
            'model' => $request->model,
            'description' => $request->description,
            'capacity' => $request->capacity,
            'voltage' => $request->voltage,
            'type' => $request->type,
            'size' => $request->size,
            'weight' => $request->weight,
            'price' => $request->price,
            'stock' => $request->stock,
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $battery->image = $imagePath;
        }

        $battery->save();

        return response()->json($battery, 201);
    }


    /**
     * @OA\Put(
     *     path="/api/batteries/{id}",
     *     summary="Update an existing battery",
     *     tags={"Battery"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="Battery ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="brand", type="string", example="Duracell"),
     *             @OA\Property(property="model", type="string", example="AA"),
     *             @OA\Property(property="description", type="string", example="High power battery"),
     *             @OA\Property(property="capacity", type="integer", example=2500),
     *             @OA\Property(property="voltage", type="number", format="float", example=1.5),
     *             @OA\Property(property="type", type="string", example="Alkaline"),
     *             @OA\Property(property="size", type="string", example="AA"),
     *             @OA\Property(property="weight", type="string", example="23g"),
     *             @OA\Property(property="price", type="integer", example=100),
     *             @OA\Property(property="stock", type="boolean", example=true),
     *             @OA\Property(property="image", type="string", format="binary")
     *         )
     *     ),
     *     @OA\Response(response=200, description="Battery updated"),
     *     @OA\Response(response=400, description="Invalid input"),
     *     @OA\Response(response=404, description="Battery not found")
     * )
     */
    public function update(Request $request) {
        $validator = Validator::make($request->all(), [
            'brand' => 'required|string',
            'model' => 'required|string',
            'description' => 'required|string',
            'capacity' => 'required|integer',
            'voltage' => 'required|numeric',
            'type' => 'nullable|string',
            'size' => 'nullable|string',
            'weight' => 'nullable|string',
            'price' => 'required|integer',
            'stock' => 'required|boolean',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $battery = Battery::find($request->id);

        if (!$battery) {
            return response()->json(['message' => 'Battery not found'], 404);
        }

        $battery->brand = $request->brand;
        $battery->model = $request->model;
        $battery->description = $request->description;
        $battery->capacity = $request->capacity;
        $battery->voltage = $request->voltage;
        $battery->type = $request->type;
        $battery->size = $request->size;
        $battery->weight = $request->weight;
        $battery->price = $request->price;
        $battery->stock = $request->stock;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $battery->image = $imagePath;
        }

        try {
            $battery->save();
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error updating battery', 'error' => $e->getMessage()], 500);
        }

        return response()->json($battery, 200);
    }

    /**
     * @OA\Delete(
     *     path="/api/batteries/{id}",
     *     summary="Delete a battery",
     *     tags={"Battery"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="Battery ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(response=200, description="Battery deleted"),
     *     @OA\Response(response=404, description="Battery not found"),
     *     @OA\Response(response=500, description="Error deleting battery")
     * )
     */
    public function destroy($id) {
        $battery = Battery::find($id);

        if (!$battery) {
            return response()->json(['message' => 'Battery not found'], 404);
        }

        try {
            $battery->delete();
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting battery', 'error' => $e->getMessage()], 500);
        }

        return response()->json(['message' => 'Battery deleted'], 200);
    }

    /**
     * @OA\Get(
     *     path="/api/batteries/{id}",
     *     summary="Get a battery by ID",
     *     tags={"Battery"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="Battery ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(response=200, description="Battery details"),
     *     @OA\Response(response=404, description="Battery not found")
     * )
     */
    public function show($id) {
        $battery = Battery::find($id);

        if (!$battery) {
            return response()->json(['message' => 'Battery not found'], 404);
        }

        return response()->json($battery, 200);
    }

}
