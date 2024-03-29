import React from "react";
import { Course } from "../../../common/types";
import { Box } from "@mui/material";
import { courseNodeToString } from "../../../common/utils";
import AddButton from "../../Buttons/AddButton";

function AddCourseDisplay({
  course,
  alreadyAdded,
  setCourseList,
}: {
  course: Course;
  alreadyAdded: boolean;
  setCourseList: () => void;
}) {
  const [isAdded, setIsAdded] = React.useState(!alreadyAdded);
  const onClick = () => {
    setIsAdded((prev) => !prev);
    setCourseList();
  };
  return (
    <Box sx={{ width: "100%", padding: "8px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span style={{ fontWeight: "bold" }}>
            {courseNodeToString(course)}
          </span>
          <div>{course.name}</div>
        </div>
        <AddButton onClick={onClick} disabled={isAdded}></AddButton>
      </Box>
    </Box>
  );
}

export default AddCourseDisplay;
