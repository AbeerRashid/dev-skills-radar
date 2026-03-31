import { useState } from "react";
import SkillList from "@/components/SkillList";
import SkillChart from "@/components/SkillChart";
import styles from "@/styles/Skills.module.css";

export default function Skills() {
    const [skills, setSkills] = useState([
        { name: "JavaScript", rating: 8 },
        { name: "React", rating: 7 },
        { name: "Node.js", rating: 6 },
        { name: "CSS", rating: 7 },
        { name: "Python", rating: 5 },
        { name: "Java", rating: 4 },
    ]);

    const [newSkillName, setNewSkillName] = useState("");

    function handleInputChange(e) {
        setNewSkillName(e.target.value);
    }

    function handleAddSkill() {
        if (newSkillName.trim() === "") return;
        setSkills([...skills, { name: newSkillName, rating: 5 }]);
        setNewSkillName("");
    }

    function handleRemoveSkill(skillName) {
        setSkills(skills.filter((skill) => skill.name !== skillName));
    }   

    function handleRatingChange(skillName, newRating) {
        setSkills(skills.map((skill) =>
            skill.name === skillName
                ? { ...skill, rating: newRating }
                : skill
        ));
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Skills</h1>
            <div className={styles.inputRow}>
                <input
                    type="text"
                    placeholder="Add new skill"
                    value={newSkillName}
                    onChange={handleInputChange}
                    className={styles.input}
                />
                <button onClick={handleAddSkill} className={styles.button}>
                    Add Skill
                </button>
            </div>
            {skills.length === 0 ? (
                <p className={styles.emptyMessage}>
                    No skills added yet. Start by adding a skill above!
                </p>
            ) : (
                <div className={styles.skillListRow}>
                    <div className={styles.skillLeft}>
                <SkillList
                    skills={skills}
                    onRatingChange={handleRatingChange}
                    onRemoveSkill={handleRemoveSkill}
                />
                 </div>

                <div className={styles.skillRight}>
                    <SkillChart skills={skills} />
                </div>
                </div>
            )}

        </div>
    );
}