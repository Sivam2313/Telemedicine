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
const Medical = ({
  setHeight,
  setWeight,
  setTemperature,
  setPulse,
  setSbp,
  setDbp,
  setAlcohol,
  setAsthama,
  setDiabetes,
  setFamilyIll,
  setSmoking,
  setSpo2,
  setOthers,
}) => {
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
          <InputLabel htmlFor="Name">Height</InputLabel>
          <OutlinedInput
            id="Name"
            label="Height"
            sx={{ borderRadius: "0px 5px 5px 0px", backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setHeight(e.target.value);
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
          <InputLabel htmlFor="Name">Weight</InputLabel>
          <OutlinedInput
            id="Name"
            label="Weight"
            sx={{ borderRadius: "0px 5px 5px 0px", backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setWeight(e.target.value);
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
            Temperature / তাপমাত্রা / तापमान (F)
          </InputLabel>
          <OutlinedInput
            id="Name"
            label="तापमान Temperature (F)"
            sx={{ borderRadius: "0px 5px 5px 0px", backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setTemperature(e.target.value);
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
          <InputLabel htmlFor="Name">Pulse</InputLabel>
          <OutlinedInput
            id="Name"
            label="Pulse"
            sx={{ borderRadius: "0px 5px 5px 0px", backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setPulse(e.target.value);
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
            Systolic blood pressure / সিস্টোলিক রক্তচাপ / सिस्टोलिक रक्तचाप
            (Systolic Blood Pressure)
          </InputLabel>
          <OutlinedInput
            id="Name"
            label="सिस्टोलिक रक्तचाप (Systolic Blood Pressure)"
            sx={{ borderRadius: "0px 5px 5px 0px", backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setSbp(e.target.value);
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
            Diastolic blood pressure / ডায়াস্টলিক রক্তচাপ / डायस्टोलिक रक्तचाप{" "}
          </InputLabel>
          <OutlinedInput
            id="Name"
            label="डायस्टोलिक रक्तचाप (Diastolic Blood Pressure)"
            sx={{ borderRadius: "0px 5px 5px 0px", backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setDbp(e.target.value);
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
          <InputLabel htmlFor="Name">SPO2</InputLabel>
          <OutlinedInput
            id="Name"
            label="SPO2"
            sx={{ borderRadius: "0px 5px 5px 0px", backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setSpo2(e.target.value);
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
            Do you have Diabetes? / আপনার ডায়াবেটিস আছে? / क्या आपको मधुमेह है?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Do you have Diabetes? (क्या आपको मधुमेह है?)"
            sx={{ backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setDiabetes(e.target.value);
            }}
            defaultValue="">
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
            <MenuItem value="Don't Know">Don't Know</MenuItem>
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
            Do you have asthma or any breathing trouble? / আপনার অ্যাসমা আছে কি
            না বা শ্বাস নিতে কোন সমস্যা আছে? / क्या आपको अस्थमा है या सांस लेने
            में कोई परेशानी है?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Do you have asthma or any breathing trouble? (क्या आपको अस्थमा है या सांस लेने में कोई परेशानी है?)"
            sx={{ backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setAsthama(e.target.value);
            }}
            defaultValue="">
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
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
            Smoking habits / ধূমপানের অভ্যাস / धूम्रपान की आदतें
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Smoking habits (धूम्रपान की आदतें)"
            sx={{ backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setSmoking(e.target.value);
            }}
            defaultValue="">
            <MenuItem value="एक दिन में 10 से अधिक">
              More than 10 in a day / একদিনে ১০ এর বেশি / एक दिन में 10 से अधिक
            </MenuItem>
            <MenuItem value="दिन में 10 से कम">
              Less than 10 in a day / দিনে ১০ এর কম / दिन में 10 से कम
            </MenuItem>
            <MenuItem value="अनियमित रूप से धूम्रपान करें">
              Smoke irregularly / অপ্রয়োজনীয়ভাবে ধূমপান / अनियमित रूप से
              धूम्रपान करें
            </MenuItem>
            <MenuItem value="पिछले 5 वर्षों में छोड़ दिया">
              Quit in the last 5 years / গত ৫ বছরে বন্ধ করেছেন / पिछले 5 वर्षों
              में छोड़ दिया
            </MenuItem>
            <MenuItem value="5 साल से अधिक समय पहले छोड़ दिया">
              Quit more than 5 years ago / ৫ বছরের বেশি আগে বন্ধ করেছেন / 5 साल
              से अधिक समय पहले छोड़ दिया
            </MenuItem>
            <MenuItem value="कभी धूम्रपान नहीं किया">
              Never smoked / কখনো ধূমপান করেননি / कभी धूम्रपान नहीं किया
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
            Alcohol drinking habit / মদ পানের অভ্যাস / शराब पीने की आदत
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Alcohol drinking habit (शराब पीने की आदत)"
            sx={{ backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setAlcohol(e.target.value);
            }}
            defaultValue="">
            <MenuItem value="Never (कभी नहीँ)">
              Never / কখনো না / कभी नहीँ
            </MenuItem>
            <MenuItem value="Occasionally (कभी-कभी)">
              Occasionally / কখনো-কখনো / कभी-कभी
            </MenuItem>
            <MenuItem value="Regularly, once a week or more, moderate quantity (नियमित रूप से, सप्ताह में एक बार या अधिक, मध्यम मात्रा)">
              Regularly, once a week or more, moderate quantity / নিয়মিতভাবে,
              সপ্তাহে একবার বা আরও বার, মাঝারি পরিমাণ / नियमित रूप से, सप्ताह
              में एक बार या अधिक, मध्यम मात्रा
            </MenuItem>
            <MenuItem value="Often with heavy quantity (अक्सर भारी मात्रा में)">
              Often with heavy quantity / সচরাচর ভারী পরিমাণে / अक्सर भारी
              मात्रा में
            </MenuItem>
            <MenuItem value="Always, can't stay without (हमेशा, इसके बिना नहीं रह सकता)">
              Always, can't stay without / সর্বদা, এর বিনায় থাকা সম্ভব নয় /
              हमेशा, इसके बिना नहीं रह सकता
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
            Family illness / পারিবারিক অসুস্থতা / पारिवारिक बीमारी
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Family illness(पारिवारिक बीमारी)"
            sx={{ backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setFamilyIll(e.target.value);
            }}
            defaultValue="">
            <MenuItem value="Diabetes (मधुमेह)">
              Diabetes / ডায়াবেটিস / मधुमेह
            </MenuItem>
            <MenuItem value="Hypertension (उच्च रक्तचाप)">
              Hypertension / উচ্চ রক্তচাপ / उच्च रक्तचाप
            </MenuItem>
            <MenuItem value="टीबी">Tuberculosis / যক্ষ্মা / टीबी</MenuItem>
            <MenuItem value="सेरेब्रल अटैक">
              Stroke / সিরেব্রাল আক্রমণ / सेरेब्रल अटैक
            </MenuItem>
            <MenuItem value="ज्ञात नहीं है">
              Unknown / জানা নেই / ज्ञात नहीं है
            </MenuItem>
            <MenuItem value="कुछ नहीं">Nothing / কিছু না / कुछ नहीं</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{ marginTop: "25px", alignSelf: "start", marginLeft: "-4vw" }}
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
          <InputLabel htmlFor="Name">Other / অন্যান্য /अन्य</InputLabel>
          <OutlinedInput
            id="Name"
            label="Height"
            sx={{ borderRadius: "0px 5px 5px 0px", backgroundColor: "#FEFFFF" }}
            onChange={(e) => {
              setOthers(e.target.value);
            }}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Medical;
