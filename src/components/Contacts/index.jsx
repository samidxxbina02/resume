import React from "react";
import { contactData } from "./const";
import { StyledContacts } from "./styled";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function Contacts() {
  return (
    <StyledContacts.Wrapper>
      <StyledContacts.List>
        {contactData.map((contact, idx) => {
          return (
            <StyledContacts.ListItem key={idx}>
              {contact.icon}
              <StyledContacts.LinkWrapper>
                <StyledContacts.Link href={contact.href}>
                  {contact.title}
                </StyledContacts.Link>
              </StyledContacts.LinkWrapper>
            </StyledContacts.ListItem>
          );
        })}
      </StyledContacts.List>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" endIcon={<SendIcon />}>
          Связаться со мной
        </Button>
      </Stack>
    </StyledContacts.Wrapper>
  );
}
