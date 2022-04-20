// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
/*
Introduction

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.
*/
function century(year) {
    return Math.ceil(year/100);
  }