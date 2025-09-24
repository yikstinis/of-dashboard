import { formatUptime } from './format';

describe('@/helpers/format', () => {
  describe('formatting uptime helper', () => {
    it('formats zero uptime', () => {
      expect(formatUptime(0)).toBe('0:00:00:00');
    });

    it('formats a few seconds uptime', () => {
      expect(formatUptime(15 * 1000)).toBe('0:00:00:15');
    });

    it('formats a few minutes uptime', () => {
      expect(formatUptime(5 * 60 * 1000)).toBe('0:00:05:00');
    });

    it('formats a few hours uptime', () => {
      expect(formatUptime(3 * 60 * 60 * 1000)).toBe('0:03:00:00');
    });

    it('formats a few days uptime', () => {
      expect(formatUptime(2 * 24 * 60 * 60 * 1000)).toBe('2:00:00:00');
    });

    it('formats complex uptime', () => {
      expect(
        formatUptime((1 * 24 + 5) * 60 * 60 * 1000 + 30 * 60 * 1000 + 45 * 1000)
      ).toBe('1:05:30:45');
    });
  });
});
