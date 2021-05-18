import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test('shortenText should not alter strings < 100 char', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

test('shortenText should limit to 100 char and add elipses to the end', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})