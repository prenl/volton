<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\{
    Validator
};
use App\Models\{
    Customer
};

class CustomerController extends Controller
{
    /**
     * @OA\Get(
     *    path="/api/admin/customers",
     *    summary="Get all customers",
     *    tags={"Customer"},
     *    description="Get all customers",
     *    operationId="getCustomers",
     *    @OA\Parameter(
     *       name="search",
     *       in="query",
     *       description="Search by name or phone",
     *       required=false,
     *       @OA\Schema(
     *          type="string"
     *       )
     *    ),
     *    @OA\Parameter(
     *       name="page",
     *       in="query",
     *       description="Page number",
     *       required=false,
     *       @OA\Schema(
     *          type="integer"
     *       )
     *    ),
     *    @OA\Parameter(
     *       name="page_size",
     *       in="query",
     *       description="Page size",
     *       required=false,
     *       @OA\Schema(
     *          type="integer"
     *       )
     *    ),
     *    @OA\Parameter(
     *       name="order_by",
     *       in="query",
     *       description="Order by name or phone",
     *       required=false,
     *       @OA\Schema(
     *          type="string"
     *       )
     *    ),
     *    @OA\Parameter(
     *       name="order_desc",
     *       in="query",
     *       description="Order descending",
     *       required=false,
     *       @OA\Schema(
     *          type="integer"
     *       )
     *    ),
     *    @OA\Response(
     *       response=200,
     *       description="Successful operation",
     *       @OA\JsonContent(
     *          type="object",
     *          @OA\Property(
     *             property="error",
     *             type="boolean"
     *          ),
     *          @OA\Property(
     *             property="message",
     *             type="string"
     *          ),
     *          @OA\Property(
     *             property="data",
     *             type="object",
     *             @OA\Property(
     *                property="page",
     *                type="integer"
     *             ),
     *             @OA\Property(
     *                property="page_size",
     *                type="integer"
     *             ),
     *             @OA\Property(
     *                property="total_pages",
     *                type="integer"
     *             ),
     *             @OA\Property(
     *                property="total_records",
     *                type="integer"
     *             ),
     *             @OA\Property(
     *                property="customers",
     *                type="object"
     *             )
     *          )
     *       )
     *    ),
     *    @OA\Response(
     *       response=400,
     *       description="Bad request",
     *       @OA\JsonContent(
     *          type="object",
     *          @OA\Property(
     *             property="error",
     *             type="boolean"
     *          ),
     *          @OA\Property(
     *             property="message",
     *             type="string"
     *          )
     *       )
     *    )
     * )
     */
    public function index(Request $request) {
        $search = $request->get('search');
        $page = intval($request->get('page')) > 0 ? intval($request->get('page')) : 1;
        $pageSize = intval($request->get('page_size')) > 0 ? intval($request->get('page_size')) : 10;
        $order = intval($request->get('order_desc')) === 1 ? 'desc' : 'asc';
        $orderBy = in_array($request->get('order_by'), ['name', 'phone']) ? $request->get('order_by') : 'name';

        $customers = Customer::query()
            ->where('name', 'like', '%'.$search.'%')
            ->orWhere('phone', 'like', '%'.$search.'%')
            ->orderBy($orderBy, $order);

        $totalRecords = $customers->count();
        $totalPages = ceil($totalRecords / $pageSize);

        if ($pageSize > 0 && $page > 0) {
            $customers = $customers->skip($page * $pageSize)->take($pageSize);
        } else {
            return response(['error' => true, 'message' => 'Parameters page or page_size is less than 1.'], 400);
        }

        $customers = $customers->get();
        return response(['error' => false, 'message' => 'Customers retrieved successfully.', 'data' => ['page' => $page, 'page_size' => $pageSize, 'total_pages' => $totalPages, 'total_records' => $totalRecords, 'customers' => $customers]], 200);
    }

    /**
     * @OA\Post(
     *     path="/api/admin/customers",
     *     tags={"Customer"},
     *     summary="Create a new customer",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="name", type="string", example="John Doe"),
     *             @OA\Property(property="phone", type="string", example="1234567890")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Customer created successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Customer created successfully."),
     *             @OA\Property(property="data", type="object")
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Validation error."),
     *             @OA\Property(property="errors", type="object")
     *         )
     *     )
     * )
     */
    public function store(Request $request) {
        // $user = Auth::user();

        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'phone' => 'required|unique:customers,phone',
        ]);

        if ($validator->fails()) {
            return response(['error' => true, 'message' => 'Validation error.', 'errors' => $validator->errors()], 422);
        }

        $customer = Customer::create($input);
        return response(['error' => false, 'message' => 'Customer created successfully.', 'data' => $customer], 201);
    }


    /**
     * @OA\Get(
     *     path="/api/admin/customers/{id}",
     *     tags={"Customer"},
     *     summary="Get customer details",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Customer retrieved successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Customer retrieved successfully."),
     *             @OA\Property(property="data")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Customer not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Customer not found.")
     *         )
     *     )
     * )
     */
    public function show($id) {
        $customer = Customer::find($id);

        if (is_null($customer)) {
            return response(['error' => true, 'message' => 'Customer not found.'], 404);
        }

        return response(['error' => false, 'message' => 'Customer retrieved successfully.', 'data' => $customer]);
    }


    /**
     * @OA\Delete(
     *     path="/api/admin/customers/{id}",
     *     tags={"Customer"},
     *     summary="Delete a customer",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Customer deleted successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Customer deleted successfully.")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Customer not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Customer not found.")
     *         )
     *     )
     * )
     */
    public function destroy($id) {
        $customer = Customer::find($id);

        if (is_null($customer)) {
            return response(['error' => true, 'message' => 'Customer not found.'], 404);
        }

        $customer->delete();
        return response(['error' => false, 'message' => 'Customer deleted successfully.'], 200);
    }

    /**
     * @OA\Put(
     *     path="/api/admin/customers/{id}",
     *     tags={"Customer"},
     *     summary="Update a customer",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="name", type="string", example="John Doe"),
     *             @OA\Property(property="phone", type="string", example="1234567890")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Customer updated successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Customer updated successfully."),
     *             @OA\Property(property="data", type="object")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Customer not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Customer not found.")
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Validation error."),
     *             @OA\Property(property="errors", type="object")
     *         )
     *     )
     * )
     */
    public function update(Request $request, $id) {
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'phone' => 'required|unique:customers,phone',
        ]);

        if ($validator->fails()) {
            return response(['error' => true, 'message' => 'Validation error.', 'errors' => $validator->errors()]);
        }

        $customer = Customer::find($id);

        if (is_null($customer)) {
            return response(['error' => true, 'message' => 'Customer not found.'], 404);
        }

        $customer->name = $input['name'];
        $customer->phone = $input['phone'];
        $customer->save();

        return response(['error' => false, 'message' => 'Customer updated successfully.', 'data' => $customer], 200);
    }

    // public function orders($id) {}

}
