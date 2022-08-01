import * as React from "react";
import { styled } from "@mui/material/styles";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    //transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <Box sx={{ color: expanded === "panel1" ? "#D1094B" : "" }}>
          <AccordionSummary
            expandIcon={
              expanded !== "panel1" ? (
                <AiOutlinePlus />
              ) : (
                <AiOutlineMinus color="#D1094B" />
              )
            }
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>PRODUCT DESCRIPTION</Typography>
          </AccordionSummary>
        </Box>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <Box sx={{ color: expanded === "panel2" ? "#D1094B" : "" }}>
          <AccordionSummary
            expandIcon={
              expanded !== "panel2" ? (
                <AiOutlinePlus />
              ) : (
                <AiOutlineMinus color="#D1094B" />
              )
            }
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography>SHIPPING & RETURNS</Typography>
          </AccordionSummary>
        </Box>
        <AccordionDetails>
          <Typography>
            Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight
            fit across the hips, bow shape legs, with knee darts and tapered
            leg. Back pockets dropped slightly for slouch feel.{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <Box sx={{ color: expanded === "panel3" ? "#D1094B" : "" }}>
          <AccordionSummary
            expandIcon={
              expanded !== "panel3" ? (
                <AiOutlinePlus />
              ) : (
                <AiOutlineMinus color="#D1094B" />
              )
            }
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography>FABRIC COMPOSITION</Typography>
          </AccordionSummary>
        </Box>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
