namespace Lingusta.Data.Models
{
    public class Theme
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public Language LearningLanguage { get; set; }

        public Language TranslationLanguage { get; set; }

        public LanguageLevel Level { get; set; }

        public ThemeType Type { get; set; }

        public ICollection<Question>? Questions { get; set; }

        public ICollection<LearnData>? LearnDatas { get; set; }
    }
}
