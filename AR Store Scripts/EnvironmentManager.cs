using UnityEngine;

public static class EnvironmentManager
{
    // Define the URL for both environments
    private static string localBackendUrl = "http://localhost:8000";
    private static string localFrontendUrl = "http://localhost:5173";
    private static string productionBackendUrl = "https://augment-kart-final-year-project.onrender.com";  
    private static string productionFrontendUrl = "https://augmentcart.netlify.app";  

    private static string raspberryBackendUrl = "https://3148a4b228b5461cbbcf7afeda8a99ea.bristidevburman.site";  
    private static string raspberryFrontendUrl = "https://augmentcart.bristidevburman.site";  

    // A flag to determine whether we are running locally or in production
    public static bool IsLocal => Application.isEditor || false;

    // Get the correct backend URL based on the environment
    public static string GetBackendUrl()
    {
        return raspberryBackendUrl;
    }
    public static string GetFrontendUrl()
    {
        return raspberryFrontendUrl;
    }
}
