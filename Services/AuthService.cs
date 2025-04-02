using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;

#pragma warning disable IDE0130 // Namespace does not match folder structure
namespace MovieRecommendationAPI.Services
#pragma warning restore IDE0130 // Namespace does not match folder structure
{
    public class AuthService:IAuthService
    {

        private readonly IConfiguration _config;

        public AuthService(IConfiguration config)
        {
            _config = config;
        }
        public string GenerateJwtToken(string Username)
        {
            var tokenHandler=new JwtSecurityTokenHandler();
#pragma warning disable CS8604 // Possible null reference argument.
            var key=Encoding.UTF8.GetBytes(_config["Jwt:Key"]);
#pragma warning restore CS8604 // Possible null reference argument.

            var tokenDescriptor=new SecurityTokenDescriptor
            {
                Subject=new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name,Username)}),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials=new SigningCredentials(new SymmetricSecurityKey(key),SecurityAlgorithms.HmacSha256Signature),
                Issuer=_config["Jwt:Issuer"],
                Audience=_config["Jwt:Audience"]
            };

            var token =tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}