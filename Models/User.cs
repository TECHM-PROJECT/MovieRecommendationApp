using Microsoft.Identity.Client;

#pragma warning disable IDE0130 // Namespace does not match folder structure
namespace MovieRecommendationAPI.Models
#pragma warning restore IDE0130 // Namespace does not match folder structure
{
    public class User
    {
        public int Id{get;set;}
        public required string Username{get;set;}
        public required string PasswordHash{get;set;}
    }
}