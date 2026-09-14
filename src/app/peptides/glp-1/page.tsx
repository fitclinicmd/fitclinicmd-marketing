import { redirect } from "next/navigation";

// GLP-1s are now their own top-level section, separated from the peptide
// library. This path 301s to /glp-1 so old links and search results still land.
export default function Glp1Moved() {
  redirect("/glp-1");
}
