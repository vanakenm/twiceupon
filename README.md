# Twice upon

A fantasy world text based generator

## Versions

### v0: Once upon a time

Single screen, "Our story begins in the <kingdom> of <name>".

Big text, highlight on the words

### v1: Arrays

Get datas for:

- place name (using list of nobles names from France)
- place kind (Duchy/Kingdom/Empire/etc)

### v2: Lord

"At that time, <lord> was the ruler of <place>."

## UX

Full page "screens"

- Arrow down to go to the next one
- Small sidebar with the list
- Clicking on a colored word allow to change it (reroll or select)
  - This impacts the next screens!

## Later

Models: Episode array - text with placeholders, name, data (code/value of what's needed there)
- If no episode create the first one
- When down arrow - go to next episode or create
- If not at episode 1, show top arrow to (next/previous)

Data

- save all results as a simple array that could be locally save (local storage or even url param)
- or as "token" that can be send again to url (token=XXX -> recreate story)

### Sub region & rulers

### Relations


### Factions

### Events

- Place events
- People events
- Relation events
