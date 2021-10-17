const strReplace = (str:string, ind: number, ins: string) => str.slice(0, ind) + ins + str.slice(ind + 1);
export default strReplace;