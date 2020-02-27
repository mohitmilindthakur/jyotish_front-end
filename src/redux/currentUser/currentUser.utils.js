export const editSavedKundali = (allUserKundalis, newBirthDetails) => {
    let index = allUserKundalis.findIndex((kundali) => kundali.id === newBirthDetails.id);
    return [...allUserKundalis.slice(0, index), newBirthDetails, ...allUserKundalis.slice(index + 1, allUserKundalis.length)];
}