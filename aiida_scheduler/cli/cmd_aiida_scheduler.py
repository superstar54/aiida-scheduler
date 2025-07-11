"""The main `scheduler` click group."""
import click

from aiida_scheduler import __version__

from aiida.cmdline.groups import VerdiCommandGroup
from aiida.cmdline.params import options, types


# Pass the version explicitly to ``version_option`` otherwise editable installs can show the wrong version number
@click.group(
    cls=VerdiCommandGroup, context_settings={"help_option_names": ["--help", "-h"]}
)
@options.PROFILE(type=types.ProfileParamType(load_profile=True), expose_value=False)
@options.VERBOSITY()
@click.version_option(
    __version__,
    package_name="aiida_scheduler",
    message="AiiDA-Scheduler version %(version)s",
)
def aiida_scheduler():
    """The command line interface of AiiDA-Scheduler."""
