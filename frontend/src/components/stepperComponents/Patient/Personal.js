import React, { useEffect, useRef, useState } from "react";
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
const Personal = ({
  setDOB,
  setEducation,
  setProfession,
  patientData,
  setMarital,
  setGender,
}) => {
  const dobVal = useRef(null);
  useEffect(() => {
    if (patientData.DOB != "") {
      dobVal.current = document.getElementById("dob");
      dobVal.current.value = patientData.DOB;
      setDOB(patientData.DOB);
    }
  }, []);

  return (
    <Box sx={{ flexFlow: "column" }} display="flex" justifyContent="center">
      <Box
        sx={{ marginTop: "5vh", alignSelf: "start", marginLeft: "-4vw" }}
        display="flex"
        justifyContent="start">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#2B7A78",
            width: "56px",
            height: "56px",
            color: "#17252A",
            borderRadius: "5px 0px 0px 5px",
          }}>
          <i
            class="material-icons"
            style={{ color: "#FEFFFF", fontSize: "2.5rem" }}>
            create
          </i>
        </Box>
        <FormControl sx={{ width: "40vw" }}>
          <InputLabel htmlFor="Name">Relationship with CWE</InputLabel>
          <OutlinedInput
            id="Name"
            label="Relationship with CWE"
            value={patientData.relationship}
            sx={{ borderRadius: "0px 5px 5px 0px", backgroundColor: "#FEFFFF" }}
            disabled
          />
        </FormControl>
      </Box>
      <Box
        sx={{ marginTop: "25px", alignSelf: "start", marginLeft: "-4vw" }}
        display="flex"
        justifyContent="center">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#2B7A78",
            width: "56px",
            height: "56px",
            color: "#17252A",
            borderRadius: "5px 0px 0px 5px",
          }}>
          <i
            class="material-icons"
            style={{ color: "#FEFFFF", fontSize: "2.5rem" }}>
            create
          </i>
        </Box>
        <FormControl sx={{ width: "40vw" }}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
            sx={{ backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            defaultValue="">
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{ marginTop: "25px", alignSelf: "start", marginLeft: "-4vw" }}
        display="flex">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#2B7A78",
            width: "56px",
            height: "56px",
            color: "#17252A",
            borderRadius: "5px 0px 0px 5px",
          }}>
          <i
            class="material-icons"
            style={{ color: "#FEFFFF", fontSize: "2.5rem" }}>
            create
          </i>
        </Box>
        <FormControl sx={{ width: "40vw" }}>
          <OutlinedInput
            id="dob"
            label="Name"
            type="date"
            sx={{ borderRadius: "0px 5px 5px 0px", backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setDOB(e.target.value);
            }}
          />
        </FormControl>
      </Box>
      <Box
        sx={{ marginTop: "25px", alignSelf: "start", marginLeft: "-4vw" }}
        display="flex">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#2B7A78",
            width: "56px",
            height: "56px",
            color: "#17252A",
            borderRadius: "5px 0px 0px 5px",
          }}>
          <i
            class="material-icons"
            style={{ color: "#FEFFFF", fontSize: "2.5rem" }}>
            book
          </i>
        </Box>
        <FormControl sx={{ width: "40vw" }}>
          <InputLabel id="demo-simple-select-label">
            Education / শিক্ষা / शिक्षा
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Education"
            sx={{ backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setEducation(e.target.value);
            }}
            defaultValue="">
            <MenuItem value="कोई औपचारिक शिक्षा नहीं">
              No Education / কোনও আধিকারিক শিক্ষা নেই / कोई औपचारिक शिक्षा नहीं
            </MenuItem>
            <MenuItem value="कक्षा 5 तक">
              To Class 5 / পঞ্চম শ্রেণি পর্যন্ত / कक्षा 5 तक
            </MenuItem>
            <MenuItem value="कक्षा 6-10, उत्तीर्ण नहीं">
              Class 6-10, Not Passout / শ্রেণি 6-10, উত্তীর্ণ হয়নি / कक्षा
              6-10, उत्तीर्ण नहीं
            </MenuItem>
            <MenuItem value="10 . उत्तीर्ण">
              Passed 10th grade / 10 তম শ্রেণি উত্তীর্ণ / 10 . उत्तीर्ण
            </MenuItem>
            <MenuItem value="कक्षा 11-12, उत्तीर्ण नहीं">
              Class 11-12, Not Passout / 11-12 শ্রেণি, উত্তীর্ণ হয়নি / कक्षा
              11-12, उत्तीर्ण नहीं
            </MenuItem>
            <MenuItem value="12 उत्तीर्ण">
              12 Pass / 12 তম শ্রেণি উত্তীর্ণ / 12 उत्तीर्ण
            </MenuItem>
            <MenuItem value="नामांकित स्नातक">
              Enrolled Graduate / স্নাতক প্রশিক্ষণে নিবন্ধিত / नामांकित स्नातक
            </MenuItem>
            <MenuItem value="ग्रेजुएट">Graduate / স্নাতক / ग्रेजुएट</MenuItem>
            <MenuItem value="नामांकित स्नातकोत्तर">
              Enrolled Postgraduate / পোস্টগ্রাজুয়েটে নিবন্ধিত / नामांकित
              स्नातकोत्तर
            </MenuItem>
            <MenuItem value="पोस्ट ग्रेजुएट">
              Post-graduate / পোস্টগ্রাজুয়েট / पोस्ट ग्रेजुएट
            </MenuItem>
            <MenuItem value="अन्य">Other / অন্যান্য / अन्य</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{ marginTop: "25px", alignSelf: "start", marginLeft: "-4vw" }}
        display="flex">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#2B7A78",
            width: "56px",
            height: "56px",
            color: "#17252A",
            borderRadius: "5px 0px 0px 5px",
          }}>
          <i
            class="material-icons"
            style={{ color: "#FEFFFF", fontSize: "2.5rem" }}>
            work
          </i>
        </Box>
        <FormControl sx={{ width: "40vw" }}>
          <InputLabel id="demo-simple-select-label">Profession</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Profession"
            sx={{ backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setProfession(e.target.value);
            }}
            defaultValue="">
            <MenuItem value="किसान">Farmer / কৃষক / किसान</MenuItem>
            <MenuItem value="नौकरी">Self Employed / কাজ / नौकरी</MenuItem>
            <MenuItem value="घरेलू कार्यकर्ता">
              Domestic Worker / ঘরেওয়ালা শ্রমিক /घरेलू कार्यकर्ता
            </MenuItem>
            <MenuItem value="दैनिक दांव">
              Daily Laborer / দৈনিক শ্রমিক / दैनिक दांव
            </MenuItem>
            <MenuItem value="विद्यार्थी">Student / ছাত্র / विद्यार्थी</MenuItem>
            <MenuItem value="समाज सेवक">
              Social Worker / সমাজসেবক / समाज सेवक
            </MenuItem>
            <MenuItem value="बेरोजगार">Unemployed / বেকার / बेरोजगार</MenuItem>
            <MenuItem value="सेवातनवृत">
              Retired Person / অবসরপ্রাপ্ত ব্যক্তি / सेवातनवृत
            </MenuItem>
            <MenuItem value="कुशल कामगार (राजमिस्त्री, दर्जी, बढ़ई, बिजली मिस्त्री, नर्स आदि)">
              कुशल कामगार / দক্ষ শ্রমিক / Skilled Workers(राजमिस्त्री(Plumber),
              दर्जी(Tailor), बढ़ई(Carpenter), बिजली मिस्त्री(Electrician), नर्स
              आदि(Nurse))
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{ marginTop: "25px", alignSelf: "start", marginLeft: "-4vw" }}
        display="flex"
        justifyContent="center">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#2B7A78",
            width: "56px",
            height: "56px",
            color: "#17252A",
            borderRadius: "5px 0px 0px 5px",
          }}>
          <i
            class="material-icons"
            style={{ color: "#FEFFFF", fontSize: "2.5rem" }}>
            create
          </i>
        </Box>
        <FormControl sx={{ width: "40vw" }}>
          <InputLabel id="demo-simple-select-label">Marital Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Marital Status"
            sx={{ backgroundColor: "#FEFFFF" }}
            defaultValue=""
            onChange={(e) => {
              setMarital(e.target.value);
            }}>
            <MenuItem value="Not Married/ अविवाहित">
              Not Married / অবিবাহিত / अविवाहित
            </MenuItem>
            <MenuItem value="विवाहित/ Married">
              विवाहित / বিবাহিত / Married
            </MenuItem>
            <MenuItem value="विधवा / अलग (Widow/ Separated)">
              विधवा / अलग (বিধবা / বিচ্ছিন্ন) / (Widow / Separated)
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Personal;
