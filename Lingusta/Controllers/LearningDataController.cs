using Lingusta.Data;
using Lingusta.Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Lingusta.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LearningDataController : ControllerBase
    {
        private readonly ILogger<LearningDataController> _logger;
        private readonly LangustaDbContext _context;

        public LearningDataController(ILogger<LearningDataController> logger, LangustaDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        //[Authorize]
        //[HttpGet("TheoryThemes")]
        //public ActionResult<IEnumerable<Theme>> TheoryThemes()
        //{
        //}
    }
}