const hostnames = [
  {
    domain: 'acorn.tv',
    networkPath: 'acorntv',
  },
  {
    domain: 'allblk.tv',
    networkPath: 'allblk',
  },
  {
    domain: 'amc.com',
    networkPath: 'amc',
  },
  {
    domain: 'amcplus.com',
    networkPath: 'amcplus',
    defaultForPreview: true,
  },
  {
    domain: 'bbcamerica.com',
    networkPath: 'bbca',
  },
  {
    domain: 'hidive.com',
    networkPath: 'hidive',
  },
  {
    domain: 'ifc.com',
    networkPath: 'ifc',
  },
  {
    domain: 'shudder.com',
    networkPath: 'shudder',
  },
  {
    domain: 'sundancenow.com',
    networkPath: 'sundancenow',
  },
  {
    domain: 'sundancetv.com',
    networkPath: 'sundancetv',
  },
  {
    domain: 'wetv.com',
    networkPath: 'wetv',
  },
];
const DEFAULT_HOST = hostnames.find((h) => h.defaultForPreview);
export async function getHostname(host?: string) {
  if (!host) return DEFAULT_HOST;
  return (
    hostnames.find((item) => {
      return item.domain === host;
    }) ?? DEFAULT_HOST
  );
}
export default hostnames;
