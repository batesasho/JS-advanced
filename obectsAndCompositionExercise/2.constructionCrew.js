function solve(inputObject) {
    if (!inputObject.dizziness) {
        return inputObject;
    }
    inputObject.levelOfHydrated += inputObject.experience * 0.1 * inputObject.weight;
    inputObject.dizziness = false;

    return inputObject;
}


console.log(solve(
    {
        weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true
    }
));
