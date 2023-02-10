export const birthday = new Date("2006-04-26");
export const timeDiff = new Date().getTime() - birthday.getTime();

export const age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
