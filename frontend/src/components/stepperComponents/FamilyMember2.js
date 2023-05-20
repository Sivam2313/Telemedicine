import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
const FamilyMember2 = ({
  name,
  relationship,
  setRelationship,
  setName,
  members,
  setMembers,
  memberArr2,
  setMemberArr2,
}) => {
  var today = new Date();
  var date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();

  const addHandler = () => {
    var data = {
      name: name,
      relationship: relationship,
    };
    if (!name || name === "") {
      return;
    }
    if (memberArr2.length <= 5) {
      var arr = [...members];
      arr.push(data);
      setMembers(arr);
    }

    if (memberArr2.length < 5) {
      arr = [...memberArr2];
      arr.push(memberArr2.length);
      setMemberArr2(arr);
    }
    setName(1);
    setRelationship("");
  };
  return (
    <Box sx={{ flexFlow: "column" }} display="flex" justifyContent="center">
      <Box
        sx={{
          marginTop: "5vh",
          alignSelf: "start",
          marginLeft: "-4vw",
          width: "55vw",
          flexFlow: "column",
        }}
        display="flex"
        justifyContent="space-evenly">
        {memberArr2.map((item, idx) => {
          return (
            <Box
              display="flex"
              key={idx}
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: "2vh" }}>
              <FormControl sx={{ width: "20vw", marginRight: "2vw" }}>
                <InputLabel htmlFor="Name">Name</InputLabel>
                <OutlinedInput
                  id="Name"
                  label="मुख्य वेतन अर्जक/ Chief Wage Earner (Name)"
                  sx={{ borderRadius: "5px", backgroundColor: "#FEFFFF" }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl sx={{ width: "20vw" }}>
                <InputLabel id="demo-simple-select-label">
                  Realtionship (रिश्ता)
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Location Code"
                  sx={{ backgroundColor: "#FEFFFF" }}
                  onChange={(e) => {
                    setRelationship(e.target.value);
                  }}
                  defaultValue="">
                  <MenuItem value="self(खुद)">self/ खुद</MenuItem>
                  <MenuItem value="पति या पत्नी">
                    husband or wife / पति या पत्नी
                  </MenuItem>
                  <MenuItem value="बेटा">Son / ছেলে / बेटा</MenuItem>
                  <MenuItem value="बेटी">Daughter / মেয়ে / बेटी</MenuItem>
                  <MenuItem value="पिता">Father / বাবা / पिता</MenuItem>
                  <MenuItem value="माता">Mother / মা / माता</MenuItem>
                  <MenuItem value="भइया">Brother / ভাই / भइया</MenuItem>
                  <MenuItem value="बहन">Sister / বোন / बहन</MenuItem>
                  <MenuItem value="दादा">GrandFather / দাদা / दादा</MenuItem>
                  <MenuItem value="दादी मा">
                    GrandMother / দাদী / दादी मा
                  </MenuItem>
                  <MenuItem value="पोता">GrandSon / নাতি / पोता</MenuItem>
                  <MenuItem value="पोती">GrandDaughter / নাতনি / पोती</MenuItem>
                  <MenuItem value="अन्यo">Other / অন্যান্য / अन्य</MenuItem>
                </Select>
              </FormControl>
            </Box>
          );
        })}
      </Box>
      <Button
        onClick={addHandler}
        sx={{
          position: "absolute",
          top: "28vh",
          right: "24vw",
          width: "4min",
          height: "4vmin",
          backgroundColor: "#CF823A",
          color: "#FEFFFF",
          "&:hover": { backgroundColor: "#CF9D6E" },
        }}>
        Add
      </Button>
    </Box>
  );
};

export default FamilyMember2;
