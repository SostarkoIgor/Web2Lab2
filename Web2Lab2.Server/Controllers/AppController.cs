using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Web2Lab2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppController : ControllerBase
    {
        [HttpGet("account/{id}")]
        public async Task<ActionResult<string>> GetAccountInfo([FromRoute] int id, [FromQuery] bool? isVulnerable)
        {
            if (isVulnerable == true)
            {
                return Ok($"this is info of user with id {id}");
            }
            else
            {
                if (id != 600)
                {
                    return Unauthorized();
                }
                else return Ok($"this is info of user with id {id}");
            }
        }
        [HttpGet("details/{role}")]
        public async Task<ActionResult<string>> GetRoleInfo([FromRoute] string role, [FromQuery] bool? isVulnerable)
        {
            if (isVulnerable == true)
            {
                return Ok($"these are informations for {role}");
            }
            else
            {
                if (role != "user")
                {
                    return Unauthorized();
                }
                else return Ok($"these are informations for {role}");

            }

        }
    }
}
