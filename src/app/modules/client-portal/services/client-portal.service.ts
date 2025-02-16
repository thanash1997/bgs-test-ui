<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\ScreeningCase;
use Illuminate\Http\JsonResponse;

class ClientPortalController extends Controller
{
    // Get client details and their screening cases
    public function show($id): JsonResponse
    {
        $client = Client::with('screeningCases')->find($id);
        if (!$client) {
            return response()->json(['message' => 'Client not found'], 404);
        }
        return response()->json($client);
    }

    // Request a new screening case
    public function requestScreening(Request $request, $id): JsonResponse
    {
        $request->validate([
            'candidate_id' => 'required|exists:candidates,id',
            'status' => 'required|string',
            'notes' => 'nullable|string'
        ]);

        $client = Client::find($id);
        if (!$client) {
            return response()->json(['message' => 'Client not found'], 404);
        }

        $screeningCase = ScreeningCase::create([
            'candidate_id' => $request->candidate_id,
            'client_id' => $id,
            'status' => $request->status,
            'notes' => $request->notes,
        ]);

        return response()->json($screeningCase, 201);
    }

    // Get screening progress
    public function getScreeningProgress($id): JsonResponse
    {
        $client = Client::with('screeningCases')->find($id);
        if (!$client) {
            return response()->json(['message' => 'Client not found'], 404);
        }

        return response()->json(['progress' => $client->screeningCases]);
    }

    // Download screening report
    public function downloadReport($id, $screeningId)
    {
        $screeningCase = ScreeningCase::find($screeningId);
        if (!$screeningCase || $screeningCase->client_id !== $id) {
            return response()->json(['message' => 'Report not available'], 404);
        }

        return response()->download(storage_path('app/' . $screeningCase->report_file));
    }
}
