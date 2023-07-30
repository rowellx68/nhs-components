import type { Meta, StoryObj } from '@storybook/react'
import { Container, Main, Row, Column, Input, Button } from '../index'

const meta: Meta<typeof Container> = {
  component: Container,
  title: 'Patters/Ask for their NHS number',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Container>

/**
 * Use this pattern to ask people for their NHS number and help them find it.
 */
export const AskForTheirNHSNumber: Story = {
  render: (args) => (
    <Container {...args}>
      <Main>
        <Row>
          <Column width="two-thirds">
            <Input
              label="What is your NHS number?"
              labelProps={{ isPageHeading: true, size: 'l' }}
              hint={
                <>
                  Your NHS number is a 10 digit number that you find on any
                  letter the NHS has sent you. For example,{' '}
                  <span className="nhsuk-u-nowrap">485 777 3456</span>.
                </>
              }
              width="10"
            />
            <Button>Continue</Button>
          </Column>
        </Row>
      </Main>
    </Container>
  ),
}
