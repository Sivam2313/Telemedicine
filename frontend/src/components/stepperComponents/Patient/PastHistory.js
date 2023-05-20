import React, { useState } from "react";
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
const PastHistory = ({
  setAdmitted,
  setCurrentMed,
  setHealthCondition,
  setInjuries,
  setOtherHistory,
  setPastDiseases,
}) => {
  return (
    <Box sx={{ flexFlow: "column" }} display="flex" justifyContent="center">
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
          <InputLabel id="demo-simple-select-label">
            Previous Illnesses / গত অসুস্থতা / पिछली बीमारियां
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="पिछली बीमारियां"
            sx={{ backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setPastDiseases(e.target.value);
            }}
            defaultValue="">
            <MenuItem value="कैंसर">Cancer / ক্যান্সার / कैंसर</MenuItem>
            <MenuItem value="हृदय रोग">
              Heart Disease / হৃদয় রোগ / हृदय रोग
            </MenuItem>
            <MenuItem value="उच्च रक्तचाप">
              High blood pressure / উচ্চ রক্তচাপ / उच्च रक्तचाप
            </MenuItem>
            <MenuItem value="मधुमेह">Diabetes / ডায়াবেটিস / मधुमेह</MenuItem>
            <MenuItem value="टीबी">TB / যক্ষ্মা / टीबी</MenuItem>
            <MenuItem value="सेरेब्रल अटैक">
              Stroke / সিরেব্রাল আক্রমণ / सेरेब्रल अटैक
            </MenuItem>
            <MenuItem value="कुछ नही">Nothing / কিছু না / कुछ नही</MenuItem>
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
          <InputLabel htmlFor="Name">Other / অন্যান্য / अन्य</InputLabel>
          <OutlinedInput
            id="Name"
            label="Other (अन्य)"
            sx={{ borderRadius: "0px 5px 5px 0px", backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setOtherHistory(e.target.value);
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
            work
          </i>
        </Box>
        <FormControl sx={{ width: "40vw" }}>
          <InputLabel id="demo-simple-select-label">
            Admitted to the Hospital / হাসপাতালে ভর্তি / अस्पताल में भर्ती
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="अस्पताल में भर्ती"
            sx={{ backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setAdmitted(e.target.value);
            }}
            defaultValue="">
            <MenuItem value="बच्चे का जन्म">
              Childbirth / শিশুর জন্ম / बच्चे का जन्म
            </MenuItem>
            <MenuItem value="चिकित्सा">
              Medical Treatment / চিকিৎসা / चिकित्सा
            </MenuItem>
            <MenuItem value="घरेलू शल्य चिकित्सा">
              Home Remedies / বাড়িতে উপচার / घरेलू शल्य चिकित्सा
            </MenuItem>
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
          <InputLabel id="demo-simple-select-label">
            Health condition / স্বাস্থ্যের অবস্থা / स्वास्थ्य की स्थिति
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="अस्पताल में भर्ती"
            sx={{ backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setHealthCondition(e.target.value);
            }}
            defaultValue="">
            <MenuItem value="उत्कृष्ट">
              Excellent / অত্যুত্তম / उत्कृष्ट
            </MenuItem>
            <MenuItem value="अच्छा">Good / ভালো / अच्छा</MenuItem>
            <MenuItem value="निष्पक्ष">Natural / নিরপেক্ষ / निष्पक्ष</MenuItem>
            <MenuItem value="बुरा">Bad / খারাপ / बुरा</MenuItem>
            <MenuItem value="बहुत बुरा">
              Very Bad / অত্যন্ত খারাপ / बहुत बुरा
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
          <InputLabel htmlFor="Name">
            Injuries or Accidents / আঘাত বা দুর্ঘটনা / चोट या दुर्घटनाएं
          </InputLabel>
          <OutlinedInput
            id="Name"
            label="चोट या दुर्घटनाएं"
            sx={{ borderRadius: "0px 5px 5px 0px", backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setInjuries(e.target.value);
            }}
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
          <InputLabel htmlFor="Name">
            Current Medications / বর্তমান ঔষধ / वर्तमान दवाएं
          </InputLabel>
          <OutlinedInput
            id="Name"
            label="वर्तमान दवाएं"
            sx={{ borderRadius: "0px 5px 5px 0px", backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setCurrentMed(e.target.value);
            }}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default PastHistory;
