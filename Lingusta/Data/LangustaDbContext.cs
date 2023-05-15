using Lingusta.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Lingusta.Data
{
    public class LangustaDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<LanguageLevel> LanguageLevels { get; set; }
        public DbSet<LearnData> LearnDatas { get; set; }
        public DbSet<Text> Texts { get; set; }
        public DbSet<Theme> Themes { get; set; }
        public DbSet<ThemeType> ThemeTypes { get; set; }
        public DbSet<UsersLanguageLevel> UsersLanguageLevels { get; set; }


        public LangustaDbContext(DbContextOptions<LangustaDbContext> options) : base(options)
        {
        }
    }

    public class LangustaDbContextFactory : IDesignTimeDbContextFactory<LangustaDbContext>
    {
        public LangustaDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<LangustaDbContext>();
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-FGTJ8N2\\SQLEXPRESS;Initial Catalog=Langusta;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False");
            return new LangustaDbContext(optionsBuilder.Options);
        }
    }
}
