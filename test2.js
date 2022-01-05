let data = [
  { id: 0, text: "text1" },
  { id: 1, text: "text2" },
];
return data.map((item) => {
  return <ItemComponent key={item.id}>{item.text}</ItemComponent>;
});
console.log(data);