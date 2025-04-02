using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MovieRecommendationAPI.Controllers
{
    [Route("api/movies")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        [HttpGet("all")]
        //[Authorize] 
        public IActionResult GetMovies()
        {
            return Ok(new string[] { "Movie 1", "Movie 2", "Movie 3" });
        }
    }
}
