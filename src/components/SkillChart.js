import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function SkillChart({ skills }) {
  return (
    <div>
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={skills}>
                <XAxis dataKey="name" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Bar dataKey="rating" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    </div>
    );
}