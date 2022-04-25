export const isActive = ({ isActive }) => {
    return { borderBottom: `2px solid ${isActive ? "" : "transparent"}` };
};
