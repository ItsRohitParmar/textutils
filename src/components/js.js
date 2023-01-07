const RemoveExtraSpace = () => {
    // setText(text.trim());
    let str = text;
    let count = 0;
    console.log("In remove Extra Sppace")
    for (let i = 0; i < str.length - 1; i++) {
        let element = str[i];
        if (element === ' ') {
            count++;
            for (let j = i + 1; j < str.length - 1; j++) {
                element = str[j];
                if (element === ' ')
                    count++;
                if (count > 1) {
                    str = str.substring(0, i) + str.substring(i + 1);
                    console.log(str);
                    count--;
                }
                i=j;
            }
            count--;
        }
    }
    setText(str);
}