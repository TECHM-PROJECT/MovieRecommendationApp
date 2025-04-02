using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.IdentityModel.Tokens;

#pragma warning disable IDE0130 // Namespace does not match folder structure
namespace MovieRecommendationAPI.Services
#pragma warning restore IDE0130 // Namespace does not match folder structure
{
    public interface IAuthService
    {
        string GenerateJwtToken(string Username);
    }
}