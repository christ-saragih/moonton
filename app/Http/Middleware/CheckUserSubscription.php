<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckUserSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $status): Response
    {
        // ketika user belum memiliki subscription dan ia mengakses video
        if ($status === 'true' && !Auth::user()->isActive) {
            return redirect(route('user.dashboard.subscriptionPlan.index'));
        }
        
        // ketika user sudah memiliki subscription aktif dan mengakses halaman payments
        if ($status === "false" && Auth::user()->isActive) {
            return redirect(route('user.dashboard.index'));
        }
        return $next($request);
    }
}
