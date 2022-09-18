import styled from 'styled-components'

const Grid = styled.div`
  min-width: 100%;
  margin-top: 100px;
  display: grid;
  padding: 0 auto;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2rem;
  grid-auto-rows: minmax(100px, auto);
`

export default function Gallery() {
  return (
    <Grid>
      <div className="grid h-24 w-40 min-w-max  place-content-center rounded-lg bg-darkfirst text-white shadow-md dark:bg-white dark:text-darkfirst">
        Hello
      </div>

      <div className="grid h-24 w-40 min-w-max  place-content-center rounded-lg bg-darkfirst text-white shadow-md dark:bg-white dark:text-darkfirst">
        Hello
      </div>
    </Grid>
  )
}
