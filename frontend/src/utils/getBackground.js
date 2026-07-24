export default function getBackground(condition, isDay) {
  const text = condition.toLowerCase();

  if (!isDay) {
    return "linear-gradient(135deg,#111827,#1F2937)";
  }

  if (text.includes("sun")) {
    return "linear-gradient(135deg,#FFF4CC,#FFE29A)";
  }

  if (text.includes("clear")) {
    return "linear-gradient(135deg,#FFF4CC,#FFE29A)";
  }

  if (text.includes("cloud")) {
    return "linear-gradient(135deg,#EAEAEA,#D6D6D6)";
  }

  if (text.includes("rain")) {
    return "linear-gradient(135deg,#C8D8E8,#8FA7BF)";
  }

  if (text.includes("snow")) {
    return "linear-gradient(135deg,#F8FAFC,#DDE6EE)";
  }

  if (text.includes("mist") || text.includes("fog")) {
    return "linear-gradient(135deg,#E5E7EB,#C7CDD4)";
  }

  return "linear-gradient(135deg,#F7F4ED,#EFEAE0)";
}