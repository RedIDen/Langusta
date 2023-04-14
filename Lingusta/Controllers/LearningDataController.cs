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

        [HttpGet]
        public IEnumerable<int> Get()
        {
            return new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 };
        }
    }
}