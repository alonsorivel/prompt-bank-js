import { format } from "date-fns/format";

const FormatDateFromUnix = ({ unixms, time = true }) => {
  const date = new Date(unixms);

  const formatStr = time ? "MMM do, yyyy HH:mm:ss" : "MMM do, yyyy";

  const formattedDate = format(date, formatStr);

  return <div>{formattedDate}</div>;
};

export default FormatDateFromUnix;
