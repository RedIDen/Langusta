using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Lingusta.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LearningDataController : ControllerBase
    {
        private readonly ILogger<LearningDataController> _logger;

        public LearningDataController(ILogger<LearningDataController> logger)
        {
            _logger = logger;
        }

        [Authorize]
        [HttpGet("TheoryThemes")]
        public ActionResult<IEnumerable<TheoryTheme>> TheoryThemes()
        {
            return StatusCode(StatusCodes.Status200OK, new TheoryTheme[]
            {
                new TheoryTheme
                {
                    Theme = "Говно",
                    Subthemes = new[]
                    {
                        "Жопа",
                        "Попа",
                        "Пися",
                    }
                },
                new TheoryTheme
                {
                    Theme = "Бебра",
                    Subthemes = new[]
                    {
                        "Кашка",
                        "Какашка",
                        "Неваляшка",
                    }
                },
            });
        }

        public class TheoryTheme
        {
            public string Theme { get; set; }
            public string[] Subthemes { get; set; }
        }
    }
}