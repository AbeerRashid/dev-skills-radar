import SkillCard from "./SkillCard";

export default function SkillList({ skills, onRatingChange }) {
  return (
    <div>
        {skills.map((skill) => (
            <SkillCard
                key={skill.name}
                name={skill.name}
                skill={skill}
                rating={skill.rating}
                onRatingChange={newRating => onRatingChange(skill.name, newRating)}
                onRemoveSkill={() => onRatingChange(skill.name)}
            />
        ))}
    </div>
  );
}
