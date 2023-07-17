import nodemailer from "nodemailer";
import { google } from "googleapis";
import { CLIENT_SECRET, CLIENT_ID, REFRESH_TOKEN, USER } from "../../config";
const users = [
  { name: "sohan", email: "ttttljslgjsg@gmail.com" },

  {
    email: "ttttljslgjsg57329858@gmail.com",
    name: "test user",
  },
  {
    email: "ranodm@gmail.com",
    name: "random",
  },
  { name: "sohan", email: "ttttljslgjsg@gmail.com" },

  {
    email: "ttttljslgjsg57329858@gmail.com",
    name: "test user",
  },
  { name: "sohan", email: "ttttljslgjsg@gmail.com" },
  {
    name: "ttttljslgjsg573298586346346",
    email: "ttttljslgjsg573298586346346@gmail.com",
  },
  {
    email: "ttttljslgjsg57329858@gmail.com",
    name: "test user",
  },
  {
    email: "ranodm@gmail.com",
    name: "random",
  },
  { name: "sohan", email: "ttttljslgjsg@gmail.com" },
  {
    name: "ttttljslgjsg573298586346346",
    email: "ttttljslgjsg573298586346346@gmail.com",
  },
  {
    email: "ttttljslgjsg57329858@gmail.com",
    name: "test user",
  },
  { name: "sohan", email: "ttttljslgjsg@gmail.com" },
  {
    name: "ttttljslgjsg573298586346346",
    email: "ttttljslgjsg573298586346346@gmail.com",
  },
  {
    email: "ttttljslgjsg57329858@gmail.com",
    name: "test user",
  },
  {
    email: "ranodm@gmail.com",
    name: "random",
  },
  { name: "sohan", email: "ttttljslgjsg@gmail.com" },
  {
    name: "ttttljslgjsg573298586346346",
    email: "ttttljslgjsg573298586346346@gmail.com",
  },
  {
    email: "ttttljslgjsg57329858@gmail.com",
    name: "test user",
  },
  { name: "sohan", email: "ttttljslgjsg@gmail.com" },
  {
    name: "ttttljslgjsg573298586346346",
    email: "ttttljslgjsg573298586346346@gmail.com",
  },
  {
    email: "ttttljslgjsg57329858@gmail.com",
    name: "test user",
  },
  {
    email: "ranodm@gmail.com",
    name: "random",
  },
  { name: "sohan", email: "ttttljslgjsg@gmail.com" },
  {
    name: "ttttljslgjsg573298586346346",
    email: "ttttljslgjsg573298586346346@gmail.com",
  },
  {
    email: "ttttljslgjsg57329858@gmail.com",
    name: "test user",
  },
  {
    _id: "62d0fb19b8ff7222a889ed20",
    name: "mark43",
    email: "mark43@gmail.com",
  },
  {
    _id: "62d0fbacb8ff7222a889ed26",
    name: "mark44",
    email: "mark44@gmail.com",
  },
  {
    _id: "62d0fbedb8ff7222a889ed2a",
    name: "mark45updated2",
    email: "mark45updated2@gmail.com",
  },
  {
    _id: "62d13f3fffe81427b25134aa",
    name: "sohan",
    email: "sohan@gmail.com",
  },
  {
    _id: "62d1427d5fdbb70b49ed931e",
    name: "Sohanur Rahman Sohan",
    email: "ttttljslgjsg573298586346346@gmail.com",
  },
  {
    _id: "62d14516feca79ff6bb62b5f",
    name: "Sohanur Rahman ",
    email: "sohanur001@gmail.com",
  },
  {
    _id: "63041b78e792a1401731da8e",
    name: "oiuwqete",
    email: "testwoute@gmail.com",
  },
  {
    _id: "6323ac91b14177ef30fc05cc",
    name: "123",
    email: "123@gmail.com",
  },
  {
    _id: "6323ed69023649cfdd4edd0d",
    name: "user-name",
    email: "user-test@gmail.com",
  },
  {
    _id: "6323ed9c023649cfdd4edd1b",
    name: "test-user",
    email: "test=user@gmail.com",
  },
  {
    _id: "63259b9c1710c9062c382514",
    name: "123532",
    email: "test234@gmail.com",
  },
  {
    _id: "6325b1531710c9062c382626",
    name: "ters",
    email: "sjgds@gmail.com",
  },
  {
    _id: "6325b31a1710c9062c382650",
    name: "34643",
    email: "testu@gmail.com",
  },
  {
    _id: "6336f236cf4ebd008d042d5e",
    name: "testuser",
    email: "testuser@gmail.com",
  },
  {
    _id: "6336fd18cf4ebd008d042f18",
    name: "testuser2",
    email: "testeuwesrlse@gmail.com",
  },
  {
    _id: "6337020dcf4ebd008d0432a5",
    name: "testuser 3",
    email: "testuser3@gmail.com",
  },
  {
    _id: "6337822a7ad031aaa186b703",
    name: "mark40",
    email: "mark40@gmail.com",
  },
  {
    _id: "6337f99a61a0d3ec94bee6cc",
    name: "23975",
    email: "0235@gmail.com",
  },
  {
    _id: "6337fa8d61a0d3ec94bee6f0",
    name: "5730",
    email: "3wo83@gmail.com",
  },
  {
    _id: "63394733e01b1911c0dbb1ca",
    name: "test-normal",
    email: "ttttljslgjsg@gmail.com",
  },
  {
    _id: "633979e1e01b1911c0dbb36a",
    name: " anewuser",
    email: "anewuser@gmail.com",
  },
  {
    _id: "62d0fb19b8ff7222a889ed20",
    name: "mark43",
    email: "mark43@gmail.com",
  },
  {
    _id: "62d0fbacb8ff7222a889ed26",
    name: "mark44",
    email: "mark44@gmail.com",
  },
  {
    _id: "62d0fbedb8ff7222a889ed2a",
    name: "mark45updated2",
    email: "mark45updated2@gmail.com",
  },
  {
    _id: "62d13f3fffe81427b25134aa",
    name: "sohan",
    email: "sohan@gmail.com",
  },
  {
    _id: "62d1427d5fdbb70b49ed931e",
    name: "Sohanur Rahman Sohan",
    email: "ttttljslgjsg573298586346346@gmail.com",
  },
  {
    _id: "62d14516feca79ff6bb62b5f",
    name: "Sohanur Rahman ",
    email: "sohanur001@gmail.com",
  },
  {
    _id: "63041b78e792a1401731da8e",
    name: "oiuwqete",
    email: "testwoute@gmail.com",
  },
  {
    _id: "6323ac91b14177ef30fc05cc",
    name: "123",
    email: "123@gmail.com",
  },
  {
    _id: "6323ed69023649cfdd4edd0d",
    name: "user-name",
    email: "user-test@gmail.com",
  },
  {
    _id: "6323ed9c023649cfdd4edd1b",
    name: "test-user",
    email: "test=user@gmail.com",
  },
  {
    _id: "63259b9c1710c9062c382514",
    name: "123532",
    email: "test234@gmail.com",
  },
  {
    _id: "6325b1531710c9062c382626",
    name: "ters",
    email: "sjgds@gmail.com",
  },
  {
    _id: "6325b31a1710c9062c382650",
    name: "34643",
    email: "testu@gmail.com",
  },
  {
    _id: "6336f236cf4ebd008d042d5e",
    name: "testuser",
    email: "testuser@gmail.com",
  },
  {
    _id: "6336fd18cf4ebd008d042f18",
    name: "testuser2",
    email: "testeuwesrlse@gmail.com",
  },
  {
    _id: "6337020dcf4ebd008d0432a5",
    name: "testuser 3",
    email: "testuser3@gmail.com",
  },
  {
    _id: "6337822a7ad031aaa186b703",
    name: "mark40",
    email: "mark40@gmail.com",
  },
  {
    _id: "6337f99a61a0d3ec94bee6cc",
    name: "23975",
    email: "0235@gmail.com",
  },
  {
    _id: "6337fa8d61a0d3ec94bee6f0",
    name: "5730",
    email: "3wo83@gmail.com",
  },
  {
    _id: "63394733e01b1911c0dbb1ca",
    name: "test-normal",
    email: "ttttljslgjsg@gmail.com",
  },
  {
    _id: "633979e1e01b1911c0dbb36a",
    name: " anewuser",
    email: "anewuser@gmail.com",
  },
  {
    _id: "633d3d73fe0b7a69bedbee39",
    name: "user-socket",
    email: "user-socket@gmail.com",
  },
  {
    _id: "63c6adf84980b2a0d2957867",
    name: "sohan",
    email: "sohan55@gmail.com",
  },
  {
    _id: "63c6ae394980b2a0d295786b",
    name: "sohan",
    email: "sohan56@gmail.com",
  },
  {
    _id: "63c6ae6d4980b2a0d295786f",
    name: "sohan",
    email: "sohan546@gmail.com",
  },
  {
    _id: "63c6aee14980b2a0d2957873",
    name: "sohan",
    email: "sohan5346@gmail.com",
  },
  {
    _id: "63c6af644980b2a0d2957879",
    name: "sohan",
    email: "sohan534dgedge6@gmail.com",
  },
  {
    _id: "63c6b1604980b2a0d2957891",
    name: "reference",
    email: "reference@gmail.com",
  },
  {
    _id: "63c6b8d84980b2a0d29578cc",
    name: "test",
    email: "teste@gmail.com",
  },
  {
    _id: "63c7f21b226cc3593f5ed6ec",
    name: "sohan",
    email: "sohan5347dgedge6@gmail.com",
  },
  {
    _id: "63c7f8e7226cc3593f5ed6f3",
    name: "sohan",
    email: "sohan53447dgedge6@gmail.com",
  },
  {
    _id: "63c7f99e226cc3593f5ed6f8",
    name: "sohanur",
    email: "sohan5f3447dgedge6@gmail.com",
  },
  {
    _id: "63c7f9c0226cc3593f5ed6fd",
    name: "sohanur",
    email: "sohafrfn5f3447dgedge6@gmail.com",
  },
  {
    _id: "63c7ff9c226cc3593f5ed702",
    name: "sohanur",
    email: "sohaffdfrfn5f3447dgedge6@gmail.com",
  },
  {
    _id: "63c80142226cc3593f5ed708",
    name: "sohanur",
    email: "sohadsgdsffdfrfn5f3447dgedge6@gmail.com",
  },
  {
    _id: "63c807f9226cc3593f5ed714",
    name: "sohanur",
    email: "sohadsgdsffdfrfn5f3447dgedge6d@gmail.com",
  },
  {
    _id: "63ca5558a4b06718300dddee",
    name: "sohanur",
    email: "sohadsgddsffdfrfn5f3447dgedge6d@gmail.com",
  },
  {
    _id: "63cab8cc4778d80c4c565a2b",
    name: "test",
    email: "test321@gmail.com",
  },
  {
    _id: "63ce19f11ae79727c9d3cd03",
    name: "sohanur",
    email: "sohadsgdcddsffdfrfn5f3447dgedge6d@gmail.com",
  },
  {
    _id: "63ce1afb1ae79727c9d3cd08",
    name: "sohanur",
    email: "sohadsgdcddsfdfdfrfn5f3447dgedge6d@gmail.com",
  },
  {
    email: "ttttljslgjsg57329858@gmail.com",
    name: "test user",
  },
  {
    email: "ranodm@gmail.com",
    name: "random",
  },
  { name: "sohan", email: "ttttljslgjsg@gmail.com" },
  {
    name: "ttttljslgjsg573298586346346",
    email: "ttttljslgjsg573298586346346@gmail.com",
  },
  {
    email: "ttttljslgjsg57329858@gmail.com",
    name: "test user",
  },
  {
    _id: "62d0fb19b8ff7222a889ed20",
    name: "mark43",
    email: "mark43@gmail.com",
  },
  {
    _id: "62d0fbacb8ff7222a889ed26",
    name: "mark44",
    email: "mark44@gmail.com",
  },
  {
    _id: "62d0fbedb8ff7222a889ed2a",
    name: "mark45updated2",
    email: "mark45updated2@gmail.com",
  },
  {
    _id: "62d13f3fffe81427b25134aa",
    name: "sohan",
    email: "sohan@gmail.com",
  },
  {
    _id: "62d1427d5fdbb70b49ed931e",
    name: "Sohanur Rahman Sohan",
    email: "ttttljslgjsg573298586346346@gmail.com",
  },
  {
    _id: "62d14516feca79ff6bb62b5f",
    name: "Sohanur Rahman ",
    email: "sohanur001@gmail.com",
  },
  {
    _id: "63041b78e792a1401731da8e",
    name: "oiuwqete",
    email: "testwoute@gmail.com",
  },
  {
    _id: "6323ac91b14177ef30fc05cc",
    name: "123",
    email: "123@gmail.com",
  },
  {
    _id: "6323ed69023649cfdd4edd0d",
    name: "user-name",
    email: "user-test@gmail.com",
  },
  {
    _id: "6323ed9c023649cfdd4edd1b",
    name: "test-user",
    email: "test=user@gmail.com",
  },
  {
    _id: "63259b9c1710c9062c382514",
    name: "123532",
    email: "test234@gmail.com",
  },
  {
    _id: "6325b1531710c9062c382626",
    name: "ters",
    email: "sjgds@gmail.com",
  },
  {
    _id: "6325b31a1710c9062c382650",
    name: "34643",
    email: "testu@gmail.com",
  },
  {
    _id: "6336f236cf4ebd008d042d5e",
    name: "testuser",
    email: "testuser@gmail.com",
  },
  {
    _id: "6336fd18cf4ebd008d042f18",
    name: "testuser2",
    email: "testeuwesrlse@gmail.com",
  },
  {
    _id: "6337020dcf4ebd008d0432a5",
    name: "testuser 3",
    email: "testuser3@gmail.com",
  },
  {
    _id: "6337822a7ad031aaa186b703",
    name: "mark40",
    email: "mark40@gmail.com",
  },
  {
    _id: "6337f99a61a0d3ec94bee6cc",
    name: "23975",
    email: "0235@gmail.com",
  },
  {
    _id: "6337fa8d61a0d3ec94bee6f0",
    name: "5730",
    email: "3wo83@gmail.com",
  },
  {
    _id: "63394733e01b1911c0dbb1ca",
    name: "test-normal",
    email: "ttttljslgjsg@gmail.com",
  },
  {
    _id: "633979e1e01b1911c0dbb36a",
    name: " anewuser",
    email: "anewuser@gmail.com",
  },
  {
    _id: "62d0fb19b8ff7222a889ed20",
    name: "mark43",
    email: "mark43@gmail.com",
  },
  {
    _id: "62d0fbacb8ff7222a889ed26",
    name: "mark44",
    email: "mark44@gmail.com",
  },
  {
    _id: "62d0fbedb8ff7222a889ed2a",
    name: "mark45updated2",
    email: "mark45updated2@gmail.com",
  },
  {
    _id: "62d13f3fffe81427b25134aa",
    name: "sohan",
    email: "sohan@gmail.com",
  },
  {
    _id: "62d1427d5fdbb70b49ed931e",
    name: "Sohanur Rahman Sohan",
    email: "ttttljslgjsg573298586346346@gmail.com",
  },
  {
    _id: "62d14516feca79ff6bb62b5f",
    name: "Sohanur Rahman ",
    email: "sohanur001@gmail.com",
  },
  {
    _id: "63041b78e792a1401731da8e",
    name: "oiuwqete",
    email: "testwoute@gmail.com",
  },
  {
    _id: "6323ac91b14177ef30fc05cc",
    name: "123",
    email: "123@gmail.com",
  },
  {
    _id: "6323ed69023649cfdd4edd0d",
    name: "user-name",
    email: "user-test@gmail.com",
  },
  {
    _id: "6323ed9c023649cfdd4edd1b",
    name: "test-user",
    email: "test=user@gmail.com",
  },
  {
    _id: "63259b9c1710c9062c382514",
    name: "123532",
    email: "test234@gmail.com",
  },
  {
    _id: "6325b1531710c9062c382626",
    name: "ters",
    email: "sjgds@gmail.com",
  },
  {
    _id: "6325b31a1710c9062c382650",
    name: "34643",
    email: "testu@gmail.com",
  },
  {
    _id: "6336f236cf4ebd008d042d5e",
    name: "testuser",
    email: "testuser@gmail.com",
  },
  {
    _id: "6336fd18cf4ebd008d042f18",
    name: "testuser2",
    email: "testeuwesrlse@gmail.com",
  },
  {
    _id: "6337020dcf4ebd008d0432a5",
    name: "testuser 3",
    email: "testuser3@gmail.com",
  },
  {
    _id: "6337822a7ad031aaa186b703",
    name: "mark40",
    email: "mark40@gmail.com",
  },
  {
    _id: "6337f99a61a0d3ec94bee6cc",
    name: "23975",
    email: "0235@gmail.com",
  },
  {
    _id: "6337fa8d61a0d3ec94bee6f0",
    name: "5730",
    email: "3wo83@gmail.com",
  },
  {
    _id: "63394733e01b1911c0dbb1ca",
    name: "test-normal",
    email: "ttttljslgjsg@gmail.com",
  },
  {
    _id: "633979e1e01b1911c0dbb36a",
    name: " anewuser",
    email: "anewuser@gmail.com",
  },
  {
    _id: "633d3d73fe0b7a69bedbee39",
    name: "user-socket",
    email: "user-socket@gmail.com",
  },
  {
    _id: "63c6adf84980b2a0d2957867",
    name: "sohan",
    email: "sohan55@gmail.com",
  },
  {
    _id: "63c6ae394980b2a0d295786b",
    name: "sohan",
    email: "sohan56@gmail.com",
  },
  {
    _id: "63c6ae6d4980b2a0d295786f",
    name: "sohan",
    email: "sohan546@gmail.com",
  },
  {
    _id: "63c6aee14980b2a0d2957873",
    name: "sohan",
    email: "sohan5346@gmail.com",
  },
  {
    _id: "63c6af644980b2a0d2957879",
    name: "sohan",
    email: "sohan534dgedge6@gmail.com",
  },
  {
    _id: "63c6b1604980b2a0d2957891",
    name: "reference",
    email: "reference@gmail.com",
  },
  {
    _id: "63c6b8d84980b2a0d29578cc",
    name: "test",
    email: "teste@gmail.com",
  },
  {
    _id: "63c7f21b226cc3593f5ed6ec",
    name: "sohan",
    email: "sohan5347dgedge6@gmail.com",
  },
  {
    _id: "63c7f8e7226cc3593f5ed6f3",
    name: "sohan",
    email: "sohan53447dgedge6@gmail.com",
  },
  {
    _id: "63c7f99e226cc3593f5ed6f8",
    name: "sohanur",
    email: "sohan5f3447dgedge6@gmail.com",
  },
  {
    _id: "63c7f9c0226cc3593f5ed6fd",
    name: "sohanur",
    email: "sohafrfn5f3447dgedge6@gmail.com",
  },
  {
    _id: "63c7ff9c226cc3593f5ed702",
    name: "sohanur",
    email: "sohaffdfrfn5f3447dgedge6@gmail.com",
  },
  {
    _id: "63c80142226cc3593f5ed708",
    name: "sohanur",
    email: "sohadsgdsffdfrfn5f3447dgedge6@gmail.com",
  },
  {
    _id: "63c807f9226cc3593f5ed714",
    name: "sohanur",
    email: "sohadsgdsffdfrfn5f3447dgedge6d@gmail.com",
  },
  {
    _id: "63ca5558a4b06718300dddee",
    name: "sohanur",
    email: "sohadsgddsffdfrfn5f3447dgedge6d@gmail.com",
  },
  {
    _id: "63cab8cc4778d80c4c565a2b",
    name: "test",
    email: "test321@gmail.com",
  },
  {
    _id: "63ce19f11ae79727c9d3cd03",
    name: "sohanur",
    email: "sohadsgdcddsffdfrfn5f3447dgedge6d@gmail.com",
  },
  {
    _id: "63ce1afb1ae79727c9d3cd08",
    name: "sohanur",
    email: "sohadsgdcddsfdfdfrfn5f3447dgedge6d@gmail.com",
  },
  {
    _id: "63ce2b9d1ae79727c9d3cdbe",
    name: "sohan",
    email: "ttttljslgjsg57329858@gmail.com",
  },
  {
    _id: "63ceb89422a035fb01a78239",
    name: "sohanur",
    email: "sohanudr01744@gmail.com",
  },
  {
    _id: "63ceb8f122a035fb01a7823f",
    name: "sohanur",
    email: "sohanudr01df744@gmail.com",
  },
  {
    _id: "633d3d73fe0b7a69bedbee39",
    name: "user-socket",
    email: "user-socket@gmail.com",
  },
  {
    _id: "63c6adf84980b2a0d2957867",
    name: "sohan",
    email: "sohan55@gmail.com",
  },
  {
    _id: "63c6ae394980b2a0d295786b",
    name: "sohan",
    email: "sohan56@gmail.com",
  },
  {
    _id: "63c6ae6d4980b2a0d295786f",
    name: "sohan",
    email: "sohan546@gmail.com",
  },
  {
    _id: "63c6aee14980b2a0d2957873",
    name: "sohan",
    email: "sohan5346@gmail.com",
  },
  {
    _id: "63c6af644980b2a0d2957879",
    name: "sohan",
    email: "sohan534dgedge6@gmail.com",
  },
  {
    _id: "63c6b1604980b2a0d2957891",
    name: "reference",
    email: "reference@gmail.com",
  },
  {
    _id: "63c6b8d84980b2a0d29578cc",
    name: "test",
    email: "teste@gmail.com",
  },
  {
    _id: "63c7f21b226cc3593f5ed6ec",
    name: "sohan",
    email: "sohan5347dgedge6@gmail.com",
  },
  {
    _id: "63c7f8e7226cc3593f5ed6f3",
    name: "sohan",
    email: "sohan53447dgedge6@gmail.com",
  },
  {
    _id: "63c7f99e226cc3593f5ed6f8",
    name: "sohanur",
    email: "sohan5f3447dgedge6@gmail.com",
  },
  {
    _id: "63c7f9c0226cc3593f5ed6fd",
    name: "sohanur",
    email: "sohafrfn5f3447dgedge6@gmail.com",
  },
  {
    _id: "63c7ff9c226cc3593f5ed702",
    name: "sohanur",
    email: "sohaffdfrfn5f3447dgedge6@gmail.com",
  },
  {
    _id: "63c80142226cc3593f5ed708",
    name: "sohanur",
    email: "sohadsgdsffdfrfn5f3447dgedge6@gmail.com",
  },
  {
    _id: "63c807f9226cc3593f5ed714",
    name: "sohanur",
    email: "sohadsgdsffdfrfn5f3447dgedge6d@gmail.com",
  },
  {
    _id: "63ca5558a4b06718300dddee",
    name: "sohanur",
    email: "sohadsgddsffdfrfn5f3447dgedge6d@gmail.com",
  },
  {
    _id: "63cab8cc4778d80c4c565a2b",
    name: "test",
    email: "test321@gmail.com",
  },
  {
    _id: "63ce19f11ae79727c9d3cd03",
    name: "sohanur",
    email: "sohadsgdcddsffdfrfn5f3447dgedge6d@gmail.com",
  },
  {
    _id: "63ce1afb1ae79727c9d3cd08",
    name: "sohanur",
    email: "sohadsgdcddsfdfdfrfn5f3447dgedge6d@gmail.com",
  },
  {
    _id: "63ce2b9d1ae79727c9d3cdbe",
    name: "sohan",
    email: "ttttljslgjsg57329858@gmail.com",
  },
  {
    _id: "63ceb89422a035fb01a78239",
    name: "sohanur",
    email: "sohanudr01744@gmail.com",
  },
  {
    _id: "63ceb8f122a035fb01a7823f",
    name: "sohanur",
    email: "sohanudr01df744@gmail.com",
  },
];
const OAuth2 = google.auth.OAuth2;

const OAuth2_client = new OAuth2(CLIENT_ID, CLIENT_SECRET);
OAuth2_client.setCredentials({ refresh_token: REFRESH_TOKEN });

function send_mail(current, time) {
  console.log("mail sending");
  const accessToken = OAuth2_client.getAccessToken();

  let delay = time ? time : 1000;
  console.log({ delay });

  const transport = nodemailer.createTransport({
    service: "gmail",
    pool: true,
    host: "smtp.gmail.com",
    port: 465,

    // host: "smtp.mailtrap.io",
    // port: 2525,
    secure: true,
    maxMessages: 300,
    maxConnections: 20,
    debug: true,

    auth: {
      type: "OAuth2",
      user: USER,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  //   let left = users.length;
  let count = current ? current : 0;

  let intervalId = setInterval(() => {
    const user = users[count];
    transport.sendMail(
      mailOption(USER, user.email, user.name),
      function (error, result) {
        if (error) {
          console.log("Error ", error);
          console.log("starting again from ", count);

          setTimeout(function () {
            console.log(
              "This will be executed after 2000 milliseconds (2 seconds)."
            );

            send_mail(count);
          }, 300000);
          clearInterval(intervalId);
        } else {
          console.log("Sucess ", result);
          delay = 1000;
        }
      }
    );
    count += 1;
    console.log({ count: count });
    if (count >= users.length) {
      clearInterval(intervalId);
    }
  }, delay);

  if (count >= users.length) {
    transport.close();
  }
}

function mailOption(user, recipient, name) {
  return {
    from: `The-${user}`,
    to: recipient,
    subject: "A Test Message",
    html: get_html_message(name),
  };
}
function get_html_message(name) {
  return `<h3>${name}, You are welcome</h3>`;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    // send_mail("john ", "ttttljslgjsg@gmail.com");
    // send_mail(req.body.name, req.body.email);
    send_mail(0);
    return res.status(200).send({ message: "Mail sent" });
  }
}
