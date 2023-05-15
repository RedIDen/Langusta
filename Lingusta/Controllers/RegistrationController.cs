using Lingusta.Data;
using Lingusta.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace Lingusta.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegistrationController : ControllerBase
    {
        private readonly ILogger<RegistrationController> _logger;
        private readonly LangustaDbContext _context;

        public RegistrationController(ILogger<RegistrationController> logger, LangustaDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpPost("Register")]
        public ActionResult<int> Register([FromBody] RegistrationData data)
        {
            if (UserExists(data.Email))
            {
                return BadRequest("User with the provided username already exists.");
            }

            CreateUser(data);

            return Ok("User successfully registered.");
        }

        [HttpPost("Login")]
        public ActionResult<string> Login([FromBody] LoginData data)
        {
            var user = _context.Users.FirstOrDefault(x => x.Email == data.Email && x.Password == data.Password);
            if (user != null)
            {
                return data.RememberMe ? Ok(JwtHelper.GenerateAuthToken(user.Email, user.Name)) : Ok(string.Empty);
            }

            return BadRequest("Invalid username or password.");
        }

        private bool UserExists(string email)
        {
            return _context.Users.Any(x => x.Email == email);
        }

        private void CreateUser(RegistrationData data)
        {
            _context.Users.Add(new Data.Models.User { Email = data.Email, Name = data.Name, Password = data.Password, Salt = data.Name });
            _context.SaveChanges();
        }
    }

    public class RegistrationData
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string SecondPassword { get; set; }
    }

    public class LoginData
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}
