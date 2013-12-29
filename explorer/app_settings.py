from django.conf import settings

REPORT_SQL_BLACKLIST = getattr(settings, 'REPORT_SQL_BLACKLIST', ('ALTER', 'RENAME ', 'DROP', 'TRUNCATE', 'INSERT INTO', 'UPDATE', 'REPLACE', 'DELETE'))

REPORT_SQL_WHITELIST = getattr(settings, 'REPORT_SQL_WHITELIST', ('DROP FUNCTION', 'REPLACE FUNCTION', 'DROP VIEW', 'REPLACE VIEW', 'CREATED', 'DELETED'))

REPORT_LOGGER_NAME = getattr(settings, 'REPORT_LOGGER_NAME', 'django')

REPORT_DEFAULT_ROWS = getattr(settings, 'REPORT_DEFAULT_ROWS', 100)

REPORT_SCHEMA_EXCLUDE_APPS = getattr(settings, 'REPORT_SCHEMA_EXCLUDE_APPS', ('',))